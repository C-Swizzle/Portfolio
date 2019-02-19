function addCommas(num){
    var nlength=num.toString().length;
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
        return returnArray.join("");
    }
    return num;
}
console.log(addCommas(25007));