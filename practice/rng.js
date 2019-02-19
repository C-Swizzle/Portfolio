function rng(y) {
    if(y>1000000000){
        return "Number too large, try again";
    }
    if(y===0){
        return "";
    }
    for (var i=0;i<y.toString().length;i++){
        var digits=[0,1,2,3,4,5,6,7,8,9];
        if (digits.indexOf(Number(y.toString()[i]))===-1){
            return "Invalid input";
        }
    }
    count = 1;
    
    var number = Math.floor(Math.random()*y);
    
    while(number>0) {
        count ++;
        var number = Math.floor(Math.random()*y);
    }
    return "It took " + addCommas(count) + " tries to get a 1 out of "+addCommas(y)+"!";
} 
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
console.log(addCommas(78999));
$(document).on("click","#rng-check-submit", function(e){
    e.preventDefault();
    var RNGesus=rng(Number($("#rng-check-input").val()));
    console.log(RNGesus);
    
    $("#rng-check-write").text(RNGesus);
});