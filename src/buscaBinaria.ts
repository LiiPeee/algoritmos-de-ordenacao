
function pesquisaBinaria(lista, item) {
    let alto = lista.length - 1;
    let baixo = 0;

    while (baixo <= alto) {
        let meio = (baixo + alto) / 2;
        let chute = lista[meio]
        if (chute == item) {
            return meio;
        }
        if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
        return null;
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

console.log(pesquisaBinaria(arr, 13));