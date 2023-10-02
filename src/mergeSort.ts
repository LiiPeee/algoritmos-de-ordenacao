function mergeArrays(leftArray: number[], rightArray: number[]) {
    let ary: number[] = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            ary.push(leftArray.shift()!);
        } else {
            ary.push(rightArray.shift()!);
        }
    }
    return [...ary, ...leftArray, ...rightArray];
}

function merge_sort(unsortedArray: number[]): number[] {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }

    const midle_index = Math.floor(unsortedArray.length / 2);
    const leftArray = unsortedArray.slice(0, midle_index);
    const rightArray = unsortedArray.slice(midle_index);
    
    return mergeArrays(merge_sort(leftArray), merge_sort(rightArray));
}

const unsortedArray = [5, 7, 1, 4, 6, 3, 2];
console.log(merge_sort(unsortedArray));
