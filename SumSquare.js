// Write a JavaScript program to find the sum of squares of the elements of an array.
arr_1 = [1, 2, 3, 4, 5]
let count = 0;
for (let i = 0; i < arr_1.length; i++) {
    const element = arr_1[i];
    const square = arr_1[i] * arr_1[i];
    count += square;
}
    console.log(count)
