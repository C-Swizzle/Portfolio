function numberOfOccurence(str, check) {
    var count=0;
    for (var i=0; i<str.length; i++) {
        if (str[i]===check) {
            count++;
        }
    }
    console.log(count);
}
numberOfOccurence("w3resource.comoooo", "o");