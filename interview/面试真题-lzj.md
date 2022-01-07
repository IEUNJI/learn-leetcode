京东数科 vue
v-model原理
基础组件通信
vue的jsx
去重
树的遍历
深度取值
跨域
反向代理
计算属性和watch区别

京东零售 react+vue
html5 css3 es6 新特性
css场景问题：布局，移动端rem vw，移动端模态框滑动穿透
ts
react的dom-diff原理，复杂度，setState批量更新原理，context原理
redux中间件模型
react hooks为什么不能出现在条件语句和循环中？引出hooks存放的位置，引出fiber架构，链表结构
事件循环（浏览器和node）
http2的优点，多路复用原理和tcp慢启动
webpack的tapable钩子系统，引出2个关键的对象，compiler和compilation，二者的区别？
plugin如何接入webpack的钩子系统的？
vue的依赖收集和响应式原理（@2和@3）
vue的mixin冲突，vue的nextTick实现原理
vite开发服务器是否了解？
flutter是否了解？
项目问题：虚拟列表，树穿梭框，react错误边界

美团 外卖/买药 react+vue+rn+flutter
事件循环
防抖节流
http缓存
http2
vue的数据劫持
项目优化
对node的了解
服务器的动态扩容
h5和原生app的交互
跨域，cors，jsonp(webpack用到)
组件间通信
indexedDB的使用场景

滴滴 react+vue
闭包的理解
防抖和节流在不同场景下的选择
dom diff的优化，子树层级改变是否会移动dom？
setState的原理，如何实现批量更新
react hooks的优缺点
组件化的理解
事件循环
http缓存
新版Chrome关于cookie的SameSite属性的变更
代码题：
1. 防抖节流二选一
2. 给定一个字符串，请你找出其中不含有重复字符的 最长子串 及 长度。（leetcode第三题）

好未来一面 vue
for in和for of的区别
ES6的新特性
箭头函数和普通函数的区别
promise和async await的区别
react高阶组件和hooks
webpack tapable的类型
代码题：
算法：
1. 有数组[1,2,3,4,5,6,7] 随机打乱该数组元素的排列顺序。
2. 有5、6 、7、8、9五个元素，能组成多少个互不相同且无重复数字的三位数(比如567、568、569...)？都是多少？
css：
水平垂直居中
动画
ts:
写一个接口

好未来二面
redux原理
http http2 tcp的数据结构，速度控制
webpack tapable的同步异步类型
代码题：
1. 乱序数组方法
2. padStart方法实现

小米一面
vue和react的区别
dom diff
webpack工作流程
http缓存
资源预加载
h5与app的交互
代码题：
1. 判断二叉树是否平衡
2. 实现字符串trim方法

字节一面 react
https http2
宏任务微任务
跨域，简单请求复杂请求
发布订阅
错误边界
前端安全
项目优化
代码题：
迷宫问题，给定一个二维数组，起始点0,0 目标点m,n 二维数组中0代表墙壁，求到达目标点的最短路径

猿辅导一面 react
this代码说输出题
promise代码说输出题
css元素长宽固定比例的实现
redux触发action后发生了什么
webpack的loader和plugin的区别
代码题：
手写Koa中间件compose函数

美团优选一面
微前端
虚拟列表
错误边界
js-sdk
代码题：
处理url查询参数
走楼梯，100级，每次1步或2步
大数相加

快手一面 vue
代码题：
1. 实现EventEmitter类，实现on off once emit方法

2. repeatFn
```javascript
// 周期执行某个函数n次
const repeatFunc = repeat(console.log, 4, 3000);
// example
repeatFunc("helloworld");
// 每3秒打印一个helloworld，总计执行4次

function repeat(fn, count, time) {
    // todo
}
```

3. 实现柯里化函数
```javascript
// 实现一个柯理化
function add (a , b) {
  return a + b;
}
function curry(fn) {
  // todo
}
curry(add)(1)(4)  =>  5
```
4. leetcode 53题 最大子序和

滴滴二面
EventEmiter
new 闭包 原型链
dom diff的复杂度
redux的中间件
fiber架构的了解
commonjs的理解和es module的区别
EventLoop微任务出现的原因
webpack的loader的执行顺序，plugin的理解，钩子系统
代码题：
实现数组的map方法
公共首部，['floor', 'flower'] 输出 'flo'

快手二面 大小周
css position transform 性能
html5 css3 animation requestAnimation
typescript
Chrome performance
vue 虚拟dom 底层用到的dom api
node 事件循环和浏览器的区别
websocket tcp udp 可靠性
代码题：
构建一颗二叉搜索树，
然后使用递归中序方式遍历出来；
var arr = [6, 4, 2, 5, 3, 7, 9, 0, 8, 1]

左节点 < 根节点 < 右节点
```javascript
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function append(node, val) {
    if (val < node.val) {
        if (node.left == null) {
            node.left = new TreeNode(val);
        } else {
            append(node.left, val);
        }
    } else if (val >= node.val) {
        if (node.right == null) {
            node.right = new TreeNode(val);
        } else {
            append(node.right, val);
        }
    }
}

function createTree(arr) {
    let root = new TreeNode(arr[0]);
    
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        append(root, val);
    }
    
    return root;
}

let arr = [6, 4, 2, 5, 3, 7, 9, 0, 8, 1];
let tree = createTree(arr);
console.log(JSON.stringify(tree));

function search(tree) {
    if (!tree) return;
    search(tree.left);
    console.log(tree.val);
    search(tree.right);
}

search(tree);
```

猿辅导二面
浏览器渲染页面的过程，css，js阻塞情况
http缓存，启发式缓存
ES6最近的新特性
React生命周期，为什么废弃旧版生命周期
getSnapshotBeforeUpdate适用场景及参数传递
react hooks，useLayout，下次渲染拿到上次存储的值 useRef
React.memo实现原理
代码题
1. 输出题目
```javascript
function Foo() {
  getName = function () { 
    console.log('1');
  };

  return this;
}
Foo.getName = function () {
  console.log('2');
};
Foo.prototype.getName = function () { 
  console.log('3');
};
var getName = function () { 
  console.log('4');
};
function getName() { 
  console.log('5');
}

Foo.getName();  
getName();        
Foo().getName(); 
getName();  
new Foo.getName(); 
(new Foo()).getName();  
```
2. 给定一个字符串，请你找出其中不含有重复字符的 最长子串 及 长度。（leetcode第三题）

好未来现场三面（学而思一对一）
虚拟dom的优势
web components与vue react的区别和联系
js的新特性
vue的scope css实现
代码题
```javascript
// 实现乘法
function add() {
  const args = [];

  args.push(outerArgs);

  const addFn = (...innerArgs) => {
    if (innerArgs.length === 0) {

      return args.reduce((acc, arr) => {
        return acc * arr.reduce((sum, num) => sum + num, 0);
      }, 1);
    } else {
      args.push(innerArgs);

      return addFn;
    }
  };

  return addFn;
}

console.log(add(1)(2)(3)() === 6); // true 因为 1*2*3 = 6
console.log(add(1, 2, 3)(4)(5)() === 120); // true 因为 (1+2+3)*4*5 = 120
console.log(add(1, 2, 3)(4, 5)() === 54); // true 因为 (1+2+3)*(4+5) = 54
```

小米 vue转react
1. 实现instanceof方法
2. 删除链表的倒数第n个节点

腾讯 react
1. 从(1000,2000]范围内生成长度为1000的随机不重复的数组，并校验
2. 深拷贝
