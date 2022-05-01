function analyzeArray(arr) {
    let sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    })

    let average = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;

    return { average, min, max, length }
}
module.exports = analyzeArray;