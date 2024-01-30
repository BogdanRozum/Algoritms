const array = [1, 3, 5, 7, 9];

const binarySearch = (array: number[], target: number) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if (guess === target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return NaN;
}

console.log(binarySearch(array, 3)); 
console.log(binarySearch(array, 11));
