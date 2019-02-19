function amountToCoins(x) {
    x = Number(x);
    var quarterCount=0;
    var dimeCount=0;
    var nickelCount=0;
    var pennyCount=0;
    while (x>0) {
    if (x-25>=0) {
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
    console.log(quarterCount, dimeCount, nickelCount, pennyCount);
}