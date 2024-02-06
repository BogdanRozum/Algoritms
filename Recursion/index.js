var sum = function (arr) {
    if (arr.length === 0)
        return 0;
    var first = arr[0], rest = arr.slice(1);
    return first + sum(rest);
};
console.log(sum([1, 2, 3, 4, 5]));
var countNumbers = function (arr) {
    if (arr.length === 0)
        return 0;
    var first = arr[0], rest = arr.slice(1);
    return 1 + countNumbers(rest);
};
console.log(countNumbers([1, 2, 3, 4, 5]));
var findMax = function (arr) {
    if (arr.length === 2)
        return arr[0] > arr[1] ? arr[0] : arr[1];
    var first = arr[0], rest = arr.slice(1);
    var max = findMax(rest);
    return first > max ? first : max;
};
console.log(findMax([1, 2, 3, 4, 5]));
var binarySearch = function (arr, target) {
    if (arr.length === 0)
        return false;
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] === target)
        return true;
    if (arr[mid] > target)
        return binarySearch(arr.slice(0, mid), target);
    return binarySearch(arr.slice(mid + 1), target);
};
console.log(binarySearch([1, 2, 3, 4, 5], 1));
