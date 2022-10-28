function textSlicer(text: string, firstIndex: number, lastIndex: number): string {
    return text.slice(firstIndex, lastIndex);
}
const result: string = textSlicer("Learning Typescript is different than Javascript", 9, 19);
console.log(result);