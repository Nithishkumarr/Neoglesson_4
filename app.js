var btnTranslate= document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");

console.log(txtinput)

function clickEventHandler() {
    console.log("clicked!!")
    
    console.log("Input",txtinput.value)   
}
btnTranslate.addEventListener("click",clickEventHandler)