  
      function factorialize(x) {
        if(x===0){
          return "";
      } else if(x>170){
        return "Enter a smaller number!";
      }
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
      num=Number(num);
      var nlength=num.toString().length;
      var negCheck;
      if (num<0){
          negCheck="-";
          num=Number(num.toString().split("-")[1]);
      } else{
          negCheck="";
      }
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
          return negCheck + returnArray.join("");
      }
      if(num===parseFloat(num)&&num.toString().split(".")[0].length>3){
          nlength=num.toString().split(".")[0].length;
          var count=1;
          var tempArray=[];
          var returnArray=[];
          for (var i=nlength-1;i>=0;i--){
              if(count%4===0){
                  tempArray.push(",");
                  count=1;
                  i++;
              }else{
                  tempArray.push(num.toString().split(".")[0][i]);
                  count++;
              }
          }
          for (var i=tempArray.length-1;i>=0;i--){
              returnArray.push(tempArray[i]);
          }
          return negCheck + returnArray.join("")+"."+num.toString().split(".")[1];
      }
      return negCheck + num;
  }
    $(document).on("click","#factorial-check-submit",function(e){
      e.preventDefault();
      if(Number($("#factorial-check-input").val())>150){
       return $("#factorial-check-write").text("Number too large");
      }
      $("#factorial-check-write").text(factorialize(Number($("#factorial-check-input").val())));
    })