function fibonacci(x,y,z) {

    var newarray=[x,y];
    for (var i=2; i<z; i++){
        newarray[i]=newarray[i-1] + newarray[i-2];

    }
    return newarray.join(",  ");
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

$(document).on("click","#fibonacci-check-submit", function(e){
    e.preventDefault();
    var numToCheck1=Number($("#fibonacci-check-input-term1").val());
    var numToCheck2=Number($("#fibonacci-check-input-term2").val());
    var generateMany=Number($("#fibonacci-check-input-many").val());
    console.log(generateMany);
    if(generateMany>100 ||generateMany<3){
        $("#fibonacci-check-write").text("Enter a number between 3-100!");
        return;
    }
    // console.log(numToCheck);
    
    $("#fibonacci-check-write").text(fibonacci(numToCheck1,numToCheck2,generateMany));
});
$(document).on("click","#fibonacci-check-clear", function(e){
    e.preventDefault();
    $("#fibonacci-check-write").empty();
});