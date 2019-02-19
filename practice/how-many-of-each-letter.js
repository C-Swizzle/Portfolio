function check(str){
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var arrayToPush =[];
    var count=[];
    for (var i=0; i<26; i++) {
        arrayToPush.push(0);
    }
    
    
    for (var i=0; i<str.length; i++) {
        for (var j=0; j<alphabet.length; j++) {
            if (str[i]===alphabet[j]) {
               
                check = Number(arrayToPush[j]);
                check++;
                arrayToPush[j]=check;
            }
        }
    }
    for (var i=0; i<alphabet.length; i++) {
        count.push(alphabet[i] + ": " + arrayToPush[i]);
    }
    console.log(count);
}