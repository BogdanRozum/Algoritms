const sum = (arr) => {
    if (arr.length === 0) return 0;

    const [first, ...rest] = arr;
    return first + sum(rest);
}

console.log(sum([1, 2, 3, 4, 5]));

const countNumbers = (arr) => {
    if (arr.length === 0) return 0;

    const [first, ...rest] = arr;
    return 1 + countNumbers(rest);
}

console.log(countNumbers([1, 2, 3, 4, 5])); 

const findMax = (arr) => {
    if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

    const [first, ...rest] = arr;
    const max = findMax(rest);
    return first > max ? first : max;
}

console.log(findMax([1, 2, 3, 4, 5])); 

const binarySearch = (arr, target) => {
    if (arr.length === 0) return false;

    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] > target) return binarySearch(arr.slice(0, mid), target);
    return binarySearch(arr.slice(mid + 1), target);
}

console.log(binarySearch([1, 2, 3, 4, 5], 1));