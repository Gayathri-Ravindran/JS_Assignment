// Write a JavaScript program to find the most frequent item of an array
function most_frequent(arr, n){
    let max_count = 0;
    let max_freq;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
            count ++;
        }
        if(count>max_count){
            max_count=count;
            max_freq=arr[i];
        }
    }
    return max_freq
}
let arr=[40, 50, 30, 40, 50, 30, 30];
let n = arr.length;
console.log("Most frequent item is ",most_frequent(arr,n));