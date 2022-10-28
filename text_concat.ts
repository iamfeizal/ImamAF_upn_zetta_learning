function concat(arr: (number | string)[]): string {
    return arr.join(" ");
}

const text1 = [1, 'data', '3', 'result'];
const text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(concat(text1));
console.log(concat(text2));