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
        if(x-10000>=0){
            x-=10000;
            hundredDollarCount++
        } else if(x-5000>=0){
            x-=5000;
            fiftyDollarCount++;
        } else if(x-2000>=0){
            x-=2000;
            twentyDollarCount++;
        } else if(x-1000>=0){
            x-=1000;
            tenDollarCount++;
        } else if(x-5000>=0){
            x-=5000;
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
    return "$100: " + hundredDollarCount + "<br>$50: "+fiftyDollarCount+"<br>$20: "+twentyDollarCount+"<br>$10: "+tenDollarCount+"<br>$5: "+fiveDollarCount+ "<br>$1: " +oneDollarCount+"<br>$0.25: "+quarterCount+"<br>$0.10: "+dimeCount+"<br>$0.05: "+nickelCount+"<br>$0.01: "+pennyCount;
}
$(document).on("click","#dollars-check-submit",function(e){
    e.preventDefault();
    var dollars=Number($("#dollars-check-input").val());
    if (Math.floor(dollars*100)/100!==dollars||dollars<=0){
        $("#dollars-check-write").text("Input a valid dollars and cents number!");
        return;
    }
    $("#dollars-check-write").html(amountToCoins(dollars*100));

});