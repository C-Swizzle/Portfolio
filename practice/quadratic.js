function quadratic(a,b,c) {
    var ans1;
    var ans2;
    var store;
    var store2;
    var denominator=2*a;
    var decidor;
    if (b**2-4*a*c>0) {
        store = -b + Math.sqrt(b**2-4*a*c);
        store2 = -b - Math.sqrt(b**2-4*a*c);
        ans1 = store/denominator;
        ans2 = store2/denominator;
    } else if (b**2-4*a*c===0) {
        ans1 = -b/denominator;
        ans2 = ans1;
    } else if(b**2-4*a*c<0) {
       decidor= b**2-4*a*c;
       decidor = -decidor;
       decidor = Math.sqrt(decidor);
       decidor =decidor/denominator;
       decidor = decidor + "i";
       store=-b/denominator;
       if (store!==0) {
       ans1=store + "+" +  decidor;
       ans2=store  + "-" +  decidor;
       } else {
           ans1=decidor;
           ans2="-" + decidor;
       }
    }
  
    return "x=" + ans1 + "<br> x=" + ans2;
}
$(document).on("click","#quadratic-check-submit", function(e){
    e.preventDefault();
    var numToCheck1=Number($("#quadratic-check-input-a").val());
    var numToCheck2=Number($("#quadratic-check-input-b").val());
    var numToCheck3=Number($("#quadratic-check-input-c").val());
    
   
    // console.log(numToCheck);
    
    $("#quadratic-check-write").html("Input: "+numToCheck1+"x<sup>2</sup>+"+numToCheck2+"x+"+ numToCheck3+"<br>" +quadratic(numToCheck1,numToCheck2,numToCheck3));
});
$(document).on("click","#quadratic-check-clear", function(e){
    e.preventDefault();
    $("#quadratic-check-write").empty();
});