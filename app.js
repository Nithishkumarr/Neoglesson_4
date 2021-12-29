var btnTranslate= document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

    // console.log(txtinput)

function clickEventHandler() {
    // console.log("clicked!!")
    outputdiv.innerText = "translated tfyjgukhjmhfyugjh: "+txtinput.value
    // console.log("Input",txtinput.value)   
}
btnTranslate.addEventListener("click",clickEventHandler)