var array = [1, 3, 5, 7, 9];
var binarySearch = function (array, target) {
    var low = 0;
    var high = array.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = array[mid];
        if (guess === target) {
            return mid;
        }
        else if (guess > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return NaN;
};
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 11));
