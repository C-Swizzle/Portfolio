function memify(str){
    var tempArray=[];
    for (var i=0; i<str.length; i++){
        tempArray.push(str[i].toUpperCase());
    }
    return tempArray.join(" ");
}
console.log(memifyv3("Chris and Kiran"));

function memifyKiranVersion(str){
    var tempArray=[];
    var count =1;
    for (var i=0; i<str.length;i++){
        count++;
        if(count%2===0){
            tempArray.push(str[i].toLowerCase());
        } else {
            tempArray.push(str[i].toUpperCase());            
        }
    }
    return tempArray.join("");
}

function memifyv3(str){
    var tempArray=[];
    for (var i=0; i<str.length; i++){
        if (Math.random()>0.5){
            tempArray.push(str[i].toUpperCase());
        } else{
            tempArray.push(str[i].toLowerCase());
        }
    }
    return tempArray.join("");
}