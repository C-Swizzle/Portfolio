function fibonacci(x,y) {

    var newarray=[x,y];
    for (var i=2; i<20; i++){
        newarray[i]=newarray[i-1] + newarray[i-2];

    }
    return newarray;
}
console.log(fibonacci(1,2));

function tribonacci (arr, x) {
    var newArray=arr;
    for (var i=3; i<x; i++) {
        newArray[i]=newArray[i-1] + newArray[i-2] + newArray[i-3];
    }
    return newArray;
}
console.log(tribonacci([1,2,3], 10));