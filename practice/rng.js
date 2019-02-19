function rng(y) {
    count = 1;
    
    var number = Math.floor(Math.random()*y);
    
    while(number>0) {
        count ++;
        var number = Math.floor(Math.random()*y);
    }
    return count;
} 
$(document).on("click","#rng-check-submit", function(e){
    e.preventDefault();
    $("#rng-check-write").text("It took " + rng(Number($("#rng-check-input").val())) + " tries to get that number!")
});