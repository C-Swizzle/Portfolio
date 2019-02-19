
    function unique(str) {
        str=str.toLowerCase();
        var newArray=[];
        var check=str[0];
        newArray.push(check);
        for (var i=0; i<str.length; i++) {
            check = str[i];
            if (newArray.indexOf(check)===-1) {
                newArray.push(check);
            }
        }
        newArray=newArray.join("")
        return newArray;
    }
    $(document).on("click","#unique-char-check-submit", function(e){
        e.preventDefault();
        var strToCheck=$("#unique-char-check-input").val();
        $("#unique-char-check-write").text(unique(strToCheck));
    });