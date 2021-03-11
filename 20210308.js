// 寻找两个正序数组的中位数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    var temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  var len1 = nums1.length;
  var len2 = nums2.length;

  var leftTotal = Math.floor((len1 + len2 + 1) / 2);

  var left = 0;
  var right = len1;

  while (left < right) {
    var i = Math.floor((left + right + 1) / 2);
    var j = leftTotal - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  var i = left;
  var j = leftTotal - i;

  var leftMax1 = i - 1 < 0 ? Number.NEGATIVE_INFINITY : nums1[i - 1];
  var leftMax2 = j - 1 < 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1];
  var rightMin1 = i + 1 > len1 ? Number.POSITIVE_INFINITY : nums1[i];
  var rightMin2 = j + 1 > len2 ? Number.POSITIVE_INFINITY : nums2[j];

  if ((len1 + len2) % 2 === 1) {
    return Math.max(leftMax1, leftMax2);
  } else {
    return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2;
  }
};
var findMedianSortedArrays1 = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var isOdd = (len1 + len2) % 2 === 1;
  var index = isOdd ? (len1 + len2 - 1) / 2 : (len1 + len2 - 2) / 2;

  var m = 0;
  var n = 0;

  var median;

  function pick() {
    var item1 = nums1[m];
    var item2 = nums2[n];

    if (typeof item1 === 'undefined') {
      median = item2;
      n += 1;
      return;
    }
    if (typeof item2 === 'undefined') {
      median = item1;
      m += 1;
      return;
    }
    if (item1 <= item2) {
      median = item1;
      m += 1;
    } else {
      median = item2;
      n += 1;
    }
  }

  for (var i = 0; i <= index; i++) {
    pick();
  }

  if (isOdd) {
    return median;
  } else {
    var median1 = median;
    pick();
    var median2 = median;
    return (median1 + median2) / 2;
  }
};

var nums1 = [1, 3], nums2 = [2];
var nums1 = [1], nums2 = [2];
var nums1 = [1, 2], nums2 = [3, 4];
var nums1 = [0, 0], nums2 = [0, 0];
var nums1 = [], nums2 = [1];
var nums1 = [2], nums2 = [];
var nums1 = [1, 4, 5], nums2 = [2, 3, 6];
var nums1 = [1, 3, 4, 5, 6, 7, 9], nums2 = [2, 8, 10, 11, 12, 13, 14, 15];

console.log(findMedianSortedArrays(nums1, nums2));
