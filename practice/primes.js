function prime(n) {
    n = Number(n);
    // console.log(Math.floor(n/2 -1) )
    for (var i=2; i<Math.floor(n/2 +1); i++) {
        if (n%i===0) {
            return "not a prime, " + " number: " + n + ",\n first multiples found:  " + i +" x "+ n/i + " = "  + n;
        } 
    }
    return "prime";
}

$(document).on("click","#prime-check-submit", function(e){
    e.preventDefault();
    var numToCheck=Number($("#prime-check-input").val());
    // console.log(numToCheck);
    if(numToCheck===0||numToCheck!==Math.abs(parseInt(numToCheck))){
        $("#prime-check-write").text("Enter a positive integer!");
        return;
    }
    $("#prime-check-write").text(prime(numToCheck));
})