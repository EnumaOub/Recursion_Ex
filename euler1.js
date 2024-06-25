// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5 , we get 3, 5, 6 and 9 . The sum of these multiples is 23
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumMult = (a, b, lim) => {
    if (a<b) {
        return sumMultRec(a, b, lim-1)
    }
    else {
        return sumMultRec(b, a, lim-1)
    }
}

const sumMultRec = (a, b, lim) => {
    if (lim < a) {
        return 0;
    }
    else {
        let res = sumMultRec(a, b, lim-1);
        if ( lim % a == 0 || lim % b == 0) {
            res += lim; 
        }
        return res;
    }
}

console.log("Sum of Multiples of a or b");
console.log("Sum Multiples of 3 or 5 below 1000", sumMult(3, 5, 1000));