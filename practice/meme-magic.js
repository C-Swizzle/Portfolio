function memify(str){
    str=str.toString().toUpperCase();
    var tempArray=[];
    for (var i=0;i<str.length;i++){
        tempArray.push(str[i]);
    }
    return tempArray.join(" ");
}

console.log(memify("hello there how are you"));