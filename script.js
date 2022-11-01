
var screen = document.getElementById('screen');
function btnClick(value){
    console.log(value);
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function findResult(){
    exp=screen.value;
    output=eval(exp)
    screen.value=eval(screen.value)
 }

 function btnDelete(){
    currentexp=screen.value;
    screen.value=currentexp.slice(0,-1)
 }
