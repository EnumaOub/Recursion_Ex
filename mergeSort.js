const mergeSort = (arr) => {
    if (arr.length <= 1){
        return arr
    }
    else {
        const m = Math.floor(arr.length / 2);
        const leftArr = mergeSort(arr.slice(0, m));
        const rightArr = mergeSort(arr.slice(m, arr.length));
        console.log("Left Array: ", leftArr);
        console.log("Right Array: ", rightArr);

        let res = [];
        while(leftArr.length > 0 || rightArr.length > 0){
            if (leftArr[0] < rightArr[0]){
                res.push(leftArr.shift());
            }
            else if (leftArr[0] > rightArr[0]) {
                res.push(rightArr.shift());
            }
            else if (leftArr.length == 0){
                res.push(rightArr.shift());
            }
            else {
                res.push(leftArr.shift());
            }
        }
        return res

    }
    

};



console.log("Merge Sort");
console.log("Merge Sort [3, 2, 1, 13, 8, 5, 0, 1]", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("Merge Sort [105, 79, 100, 110]", mergeSort([105, 79, 100, 110]));