function fibonacci(x,y,z) {

    var newarray=[x,y];
    for (var i=2; i<z; i++){
        newarray[i]=newarray[i-1] + newarray[i-2];

    }
    for (var i=0;i<newarray.length;i++){
        newarray[i]=addCommas(newarray[i]);

    }
    return newarray.join("<br>");
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
function addCommas(num){
    num=Number(num);
    var nlength=num.toString().length;
    var negCheck;
    if (num<0){
        negCheck="-";
        num=Number(num.toString().split("-")[1]);
    } else{
        negCheck="";
    }
    if (nlength>3&&num===parseInt(num)){
        var count=1;
        var tempArray=[];
        var returnArray=[];
        for (var i=nlength-1;i>=0;i--){
            if(count%4===0){
                tempArray.push(",");
                count=1;
                i++;
            }else{
                tempArray.push(num.toString()[i]);
                count++;
            }
        }
        for (var i=tempArray.length-1;i>=0;i--){
            returnArray.push(tempArray[i]);
        }
        return negCheck + returnArray.join("");
    }
    if(num===parseFloat(num)&&num.toString().split(".")[0].length>3){
        nlength=num.toString().split(".")[0].length;
        var count=1;
        var tempArray=[];
        var returnArray=[];
        for (var i=nlength-1;i>=0;i--){
            if(count%4===0){
                tempArray.push(",");
                count=1;
                i++;
            }else{
                tempArray.push(num.toString().split(".")[0][i]);
                count++;
            }
        }
        for (var i=tempArray.length-1;i>=0;i--){
            returnArray.push(tempArray[i]);
        }
        return negCheck + returnArray.join("")+"."+num.toString().split(".")[1];
    }
    return num;
}
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
    
    $("#fibonacci-check-write").html(fibonacci(numToCheck1,numToCheck2,generateMany));
});
$(document).on("click","#fibonacci-check-clear", function(e){
    e.preventDefault();
    $("#fibonacci-check-write").empty();
});