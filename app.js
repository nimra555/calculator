function getNumber(num){
    var result = document.getElementById("result");
    result.value+=num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = 0
    if(result.value==7){
        result.value = ""
        console.log("check result")
    }
    else{
        console.log("wrong")
    }
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function backResult(){
    var result = document.getElementById("result");
    result.value = result.value.charAt(result.lenght - 1 );
    console.log(result.value.charAt(result.value.lenght - 1  ));
}