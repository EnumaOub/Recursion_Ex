// const fibonacci = (n) => {
//     if (n == 0) {
//         return 0
//     }
//     else {
//         let a = 0;
//         let b = 1;
//         for (let i=2; i<=n; i++) {
//             let temp = a + b;
//             a = b;
//             b = temp;
//         }
//         return b;
//     }
// };

// const fibs = (n) => {
//     if (n < 0) {
//         return "n need to be bigger than 0"
//     } 
//     else {
//         let arr = [];
//         for (let i=0; i<n; i++) {
//             arr.push(fibonacci(i))
//         }
//         return arr;
//     }
// };

// const fibonacciRec = (n) => {
//     if (n == 0) {
//         return 0;
//     } 
//     if (n == 1) {
//         return 1;
//     } 
//     else {
//         return fibonacciRec(n-1) + fibonacciRec(n-2);
//     }
    
// };

// const fibsRec = (n) => {
//     if (n < 0) {
//         return "n need to be bigger than 0"
//     }
//     if (n > 0) {
//         return fibsRec(n-1).concat([fibonacciRec(n-1)]);
//     } 
//     else {
//         return [];
//     }
// };


const fibs = (n) => {
    if (n < 0) {
        return "n need to be bigger than 0"
    } 
    else {
        let arr = [];
        
        for (let i=0; i<n; i++) {
            let a = 0;
            let b = 1;
            if (i == 0) {
                b = 0;
            }
            else {
                for (let j=2; j<=i; j++) {
                    let temp = a + b;
                    a = b;
                    b = temp;
                }
            }
            
            arr.push(b)
        }
        return arr;
    }
};

const fibsRec = (n) => {
    if (n <= 0) {
        throw new Error('Please insert valid number');
    } 
    if (n == 1) {
        return [0, 1];
    } 
    else {
        const arr = fibsRec(n-1);
        return arr.concat(arr[n-1] + arr[n-2]);
    } 
};


console.log("Fibonacci");
console.log("fibs 8", fibs(8));
console.log("fibs 3", fibs(3));
console.log("fibs 15", fibs(15));
console.log("fibs 22", fibs(22));

console.log("Fibonacci Recursion");
console.log("fibs 8", fibs(8));
console.log("fibs 3", fibs(3));
console.log("fibs 15", fibs(15));
console.log("fibs 22", fibs(22));
