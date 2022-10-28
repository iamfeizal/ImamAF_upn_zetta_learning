function textSlicer(text, firstIndex, lastIndex) {
    return text.slice(firstIndex, lastIndex);
}
var result = textSlicer("Learning Typescript is different than Javascript", 9, 19);
console.log(result);
