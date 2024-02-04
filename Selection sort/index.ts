const findSmaller = (arr) => {
    let smaller = arr[0];
    let smallerIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smaller) {
            smaller = arr[i];
            smallerIndex = i;
        }
    }
    return smallerIndex;
}

const selectionSort = (arr: number[]) => {
    let newArr: number[] = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let smaller = findSmaller(arr);
        newArr.push(arr.splice(smaller, 1)[0]);
    }

    return newArr;
}

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr)); // [2, 3, 5, 6, 10]