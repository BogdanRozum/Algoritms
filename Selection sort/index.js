var findSmaller = function (arr) {
    var smaller = arr[0];
    var smallerIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smaller) {
            smaller = arr[i];
            smallerIndex = i;
        }
    }
    return smallerIndex;
};
var selectionSort = function (arr) {
    var newArr = [];
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var smaller = findSmaller(arr);
        newArr.push(arr.splice(smaller, 1)[0]);
    }
    return newArr;
};
var arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr)); // [2, 3, 5, 6, 10]
