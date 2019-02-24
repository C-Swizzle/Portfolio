var mach=process.argv;
function pwCheck(str){
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var capsAlphabet=[];
    var lowerCaseCheck=false;
    var lengthCheck=false;
    var upperCaseCheck=false;
    for (var i=0;i<alphabet.length;i++){
        capsAlphabet.push(alphabet[i].toUpperCase());
    }
    if(str.length>=8){
        lengthCheck=true;
    }
    for (var i=0; i<str.length;i++){
        if(alphabet.indexOf(str[i])!==-1){
            lowerCaseCheck=true;
        }
        if(capsAlphabet.indexOf(str[i])!==-1){
            upperCaseCheck=true;
        }
    }
    return lengthCheck&&lowerCaseCheck&&upperCaseCheck;
}

console.log(pwCheck(mach[2]));