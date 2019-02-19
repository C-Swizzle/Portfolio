function amountToCoins(cents) {
    x = Number(cents);
    var hundredDollarCount=0;
    var fiftyDollarCount=0;
    var twentyDollarCount=0;
    var tenDollarCount=0;
    var fiveDollarCount=0;
    var oneDollarCount=0;
    var quarterCount=0;
    var dimeCount=0;
    var nickelCount=0;
    var pennyCount=0;
    while (x>0) {
    if($("#hundred-dollar-checkbox").is(':checked')){
        while(x>=10000){
            if(x-10000>=0){
            x-=10000;
            hundredDollarCount++
            }
    } 
}
    if($("#fifty-dollar-checkbox").is(':checked')){
        while(x>=5000){
            if(x-5000>=0){
                x-=5000;
                fiftyDollarCount++;
            }
    }
    } 
      if(x-2000>=0){
            x-=2000;
            twentyDollarCount++;
        } else if(x-1000>=0){
            x-=1000;
            tenDollarCount++;
        } else if(x-500>=0){
            x-=500;
            fiveDollarCount++;
        }else if(x-100>=0){
            x-=100;
            oneDollarCount++;
        }else if (x-25>=0) {
        x-=25;
        quarterCount++;
    } else if(x-10>=0) {
        x-=10;
        dimeCount++;
    }
    else if(x-5>=0) {
        x-=5;
        nickelCount++;
    }
    else if (x-1>=0) {
        x-=1;
        pennyCount++;
    }
    }
    if(hundredDollarCount>0){
        hundredDollarCount="$100: " + hundredDollarCount +"<br>";
    } else{
        hundredDollarCount="";
    }
    if(fiftyDollarCount>0){
        fiftyDollarCount="$50: "+fiftyDollarCount+"<br>";
    } else{
        fiftyDollarCount="";
    }
    if(twentyDollarCount>0){
        twentyDollarCount="$20: "+twentyDollarCount+"<br>";
    } else{
        twentyDollarCount="";
    }
    if(tenDollarCount>0){
        tenDollarCount="$10: "+tenDollarCount+"<br>";
    } else{
        tenDollarCount="";
    }
    if(fiveDollarCount>0){
        fiveDollarCount="$5: "+fiveDollarCount+"<br>";
    } else{
        fiveDollarCount="";
    }
    if(oneDollarCount>0){
        oneDollarCount="$1: "+oneDollarCount+"<br>";
    } else{
        oneDollarCount="";
    }
    if(quarterCount>0){
        quarterCount="$0.25: "+quarterCount+"<br>";
    } else{
        quarterCount="";
    }
    if(dimeCount>0){
        dimeCount="$0.10: "+dimeCount+"<br>";
    } else{
        dimeCount="";
    }
    if(nickelCount>0){
        nickelCount="$0.05: "+nickelCount+"<br>";
    } else{
        nickelCount="";
    }
    if (pennyCount>0){
        pennyCount="$0.01: "+pennyCount+"<br>";
    } else{
        pennyCount="";
    }
    return hundredDollarCount +fiftyDollarCount+twentyDollarCount+tenDollarCount+fiveDollarCount+oneDollarCount+quarterCount+dimeCount+nickelCount+pennyCount;
}
$(document).on("click","#dollars-check-submit",function(e){
    e.preventDefault();
    console.log($("#fifty-dollar-checkbox").is(':checked'));
    var dollars=Number($("#dollars-check-input").val());
    if (Math.floor(dollars*100)/100!==dollars||dollars<=0){
        $("#dollars-check-write").text("Input a valid dollars and cents number!");
        return;
    }
    $("#dollars-check-write").html(amountToCoins(dollars*100));

});