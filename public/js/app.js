function getNumber(num){
    var result = document.getElementById("result");
    result.value+=num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function sumResult(){
    var result = document.getElementById("result");
    return(
    result.value = eval(result.value)
    )
}
function backResult(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,-1);     
}