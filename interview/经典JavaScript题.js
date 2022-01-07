/**
 * 手写 call bind
 */

Function.prototype.call = function call(context, ...args) {
  // 将函数放到上下文对象上调用，然后删除新增的key
  const cacheKey = '__bindCallback__';
  Object.defineProperty(context, cacheKey, {
    configurable: true, // 后续可删除
    enumerable: false, // 不可枚举
    get: () => { // 箭头函数 this
      return this;
    }
  });
  context[cacheKey](...args);
  delete context[cacheKey]
};

Function.prototype.bind = function bind(context, ...bindArgs) {
  // 利用apply实现，注意绑定参数的拼接
  return (...args) => {
    this.apply(context, bindArgs.concat(args));
  };
};

const context = {
  name: 'this'
};

function fn(...args) {
  console.log(this, args);
}

fn.call(context, 1, 2, 3);

// const bindFn = fn.bind(context, 1, 2, 3);

// bindFn(4, 5, 6);

/**
 * 手写 reduce
 */

Array.prototype.reduce = function reduce(callback, acc) {
  // acc 累加器，没有acc说明是首次调用，取前2项
  for (let i = 0; i < this.length; i++) {
    if (typeof acc === 'undefined') {
      acc = callback(this[i], this[i + 1], i + 1, this);
    } else {
      acc = callback(acc, this[i], i, this);
    }
  }

  return acc;
};

const sum = [1, 2, 3].reduce((acc, item, index, arr) => {
  return acc + item;
}, 0);

console.log(sum);

/**
 * 手写 防抖 节流
 */

function debounce(callback, delay) {
  // 防抖，闭包存放timer，每次调用都先清一下
  // 函数调用通过定时器，所以是先延迟
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function throttle(callback, delay) {
  // 节流，闭包缓存canRun，默认可以run
  // 运行前将canRun置为false，延迟后再canRun true
  let canRun = true;

  return (...args) => {
    if (!canRun) return;

    canRun = false;
    callback(...args);

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

/**
 * 手写 Object.create
 */

Object.create = function create(proto, props) {
  // 用一个辅助类，改变原型实现
  // 注意第二个参数props传给defineProperties
  function CreateHelper() { }
  CreateHelper.prototype = proto;

  const obj = new CreateHelper();

  props && Object.defineProperties(obj, props);

  return obj;
};

const a = {
  name: 'a'
};

const b = Object.create(a, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'b'
  }
});

console.log(b);
console.log(b.__proto__.name);

/**
 * 手写 new
 */

function newHelper(constructor, ...args) {
  // 构造上下文对象，即实例，通过Object create控制原型指向
  // 注意构造函数通过apply调用之后的返回值，如果是引用类型，会覆盖this
  const context = Object.create(constructor.prototype);

  const res = constructor.apply(context, args);

  if (res && typeof res === 'object') {
    return res;
  }

  return context;
}

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} eat`);
}

const dog = new Animal('dog');
const cat = newHelper(Animal, 'cat');
dog.eat();
cat.eat();
console.log(dog);
console.log(cat);

/**
 * 手写 Promise
 * all 都成功才成功 有一个失败就失败
 * any 都失败才失败 有一个成功就成功
 * allSettled 返回所有 promise 的值或失败原因
 * race 竞速 成功或失败取决于第一个 promise
 * catch 
 * finally
 */

Promise.all = function all(promises) {
  // 计数，注意普通值类型直接 done 成功
  return new Promise((resolve, reject) => {
    const values = [];
    let count = 0;

    const done = (value, index) => {
      values[index] = value;

      if (++count === promises.length) {
        resolve(values);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      const item = promises[i];

      if (item instanceof Promise) {
        item.then(value => {
          done(value, i);
        }, resolve);
      } else {
        done(item, i);
      }
    }
  });
};

Promise.any = function any(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let count = 0;

    const done = (error, index) => {
      errors[index] = error;

      if (++count === promises.length) {
        reject(errors);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      const item = promises[i];

      if (item instanceof Promise) {
        item.then(resolve, error => {
          done(error, i);
        });
      } else {
        resolve(item);
      }
    }
  });
};

Promise.allSettled = function allSettled(promises) {
  return new Promise((resolve, reject) => {
    const response = [];
    let count = 0;

    const done = (res, index) => {
      response[index] = res;

      if (++count === promises.length) {
        resolve(response);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      const item = promises[i];

      if (item instanceof Promise) {
        item.then(value => {
          done({ status: 'fulfilled', value }, i);
        }, error => {
          done({ status: 'rejected', reason: error }, i);
        });
      } else {
        done({ status: 'fulfilled', value: item }, i);
      }
    }
  });
};

Promise.race = function race(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const item = promises[i];

      if (item instanceof Promise) {
        item.then(resolve, reject);
      } else {
        resolve(item);
      }
    }
  });
};

Promise.prototype.catch = function (errorCallback) {
  return this.then(null, errorCallback);
};

Promise.prototype.finally = function (callback) {
  return this.then(value => {
    return Promise.resolve(callback()).then(() => {
      return value;
    });
  }, reason => {
    return Promise.resolve(callback()).then(() => {
      throw reason;
    });
  });
};

const promiseArr = [
  new Promise((r, rej) => setTimeout(rej, 1000, 1)),
  new Promise((r, rej) => setTimeout(rej, 500, 2)),
  new Promise((r, rej) => setTimeout(r, 1500, 4)),
];
