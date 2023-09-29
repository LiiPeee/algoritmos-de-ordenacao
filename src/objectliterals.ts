function getCar(index) {
    const cars = {
        0: "Ferrari",
        1: "Ford",
        2: "Lamborghini",
        3: "BMW"
    }

    const result = cars[index]
    return result;
}

console.log(getCar(2))