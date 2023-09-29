function bubbleSort(lista) {
    const tamanhoLista = lista.length;

    for (let i = 0; i < tamanhoLista - 1; i++) {
        for (let j = 0; j < tamanhoLista - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                const temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

const minhaLista = [4, 2, 7, 1, 9, 3];

console.log(bubbleSort(minhaLista));

// function selectionSort(lista) {
//     let listaTamanho = lista.length;
//     let menor = 0;
//     for (let i = 0; i < listaTamanho - 1; i++) {
//         menor = i;
//         for (let j = i + 1; j < listaTamanho; j++) {
//             if (lista[j] < lista[menor]) {
//                 menor = j
//             }
//         }
//         if (i != menor) {
//             const temp = lista[menor];
//             lista[menor] = lista[i];
//             lista[i] = temp
//         }
//     }
//     return lista
// }
// const list = [4, 2, 7, 1, 9, 3]

// console.log(selectionSort(list))