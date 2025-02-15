const answer=document.getElementById("display");
function appendValue(value){
    answer.value+=value;
}
function calculateResult(){
try{
answer.value=eval(answer.value);
}catch{
    answer.value="Error"
}
}
function clearDisplay(){
answer.value="";
}