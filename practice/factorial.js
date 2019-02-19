  
      function factorialize(x) {
        var temp=x;
        for (var i=1; i<temp; i++) {
          x=x*i;
        }
        return x;
        
    }
  //   console.log(factorialize(5));
    function strongNum(num) {
        var numString = num.toString();
        var temp=0;
        for (var i=0; i<numString.length; i++) {
          temp = temp + factorialize(Number(numString[i]));
        }
        if (temp===num) {
            return "STRONG!!!!";
        } else {
            return "Not Strong !!";
        }
    }
    