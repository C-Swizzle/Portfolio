  
      function factorialize(x) {
        var temp=Number(x);
        for (var i=1; i<temp; i++) {
          x=x*i;
        }
        return addCommas(x);
        
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
    function addCommas(num){
      var nlength=num.toString().length;
      if (nlength>3&&num===parseInt(num)){
          var count=1;
          var tempArray=[];
          var returnArray=[];
          for (var i=nlength-1;i>=0;i--){
              if(count%4===0){
                  tempArray.push(",");
                  count=1;
                  i++;
              }else{
                  tempArray.push(num.toString()[i]);
                  count++;
              }
          }
          for (var i=tempArray.length-1;i>=0;i--){
              returnArray.push(tempArray[i]);
          }
          return returnArray.join("");
      }
      return num;
  }
    $(document).on("click","#factorial-check-submit",function(e){
      e.preventDefault();
      $("#factorial-check-write").text(factorialize(Number($("#factorial-check-input").val())));
    })