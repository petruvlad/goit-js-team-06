const fontSizeControl = document.querySelector('#font-size-control');
const textControl = document.querySelector('#text');

fontSizeControl.addEventListener("input", () =>{
 const fontSize = fontSizeControl.value + "px";
    text.style.fontSize = fontSize;
});