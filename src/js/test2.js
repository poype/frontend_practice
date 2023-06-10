


export function add(num1, num2) {
    return num1 + num2;
}

export function multiple(...nums) {
    let result = 1;
    for(let num of nums) {
        result *= num
    }

    return result
}