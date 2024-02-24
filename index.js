const myBtn= document.getElementById("myBtn");
const lbl1= document.getElementById("lbl1");
const lbl2= document.getElementById("lbl2");
const lbl3= document.getElementById("lbl3");
const min = 1;
const max = 6;
let randomNum1, randomNum2, randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() *  max) + min;
    randomNum2 = Math.floor(Math.random() *  max) + min;
    randomNum3 = Math.floor(Math.random() *  max) + min;
    lbl1.textContent = randomNum1;
    lbl2.textContent = randomNum2;
    lbl3.textContent = randomNum3;
}