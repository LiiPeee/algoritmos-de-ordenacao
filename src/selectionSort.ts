function selectionSort(arr) {
    let menor = 0;
    let arrLength = arr.length
    for (let i = 0; i < arrLength - 1; i++) {
        menor = i
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[menor]) {
                menor = j;
            }
        }
        if (menor != i) {
            const temp = arr[menor];
            arr[menor] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const lista = [4, 2, 7, 1, 9, 3]

console.log(selectionSort(lista))