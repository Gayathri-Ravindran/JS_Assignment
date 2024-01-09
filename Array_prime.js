function array_prime(arr) {
    const num = arr[0];

    if (num <= 1) {
        console.log("Not prime");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not prime");
            return;
        }
    }

    console.log("Prime");
}

const Myarray = [3, 5, 6];
array_prime(Myarray);
console.log(Myarray[0]);
