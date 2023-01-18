const mw = 400;
const but1 = document.getElementById("plus");
const but2 = document.getElementById("minus");
const fill = document.getElementById("fill");
const empty = document.getElementById("empty");
var fillval = 0;
var emptyval = 300;
console.log(fillval);

but1.addEventListener("click", () => {
     console.log(fillval);
     fill.style.width = fillval +"px";
     fillval = fillval +20;
     emptyval = mw -fillval;
     
     empty.style.width = emptyval + "px";
}); 

but2.addEventListener("click", () => {
     console.log(fillval);
     fill.style.width = fillval +"px";
     fillval = fillval -20;
     emptyval = mw -fillval;
     
     empty.style.width = emptyval + "px";
}); 



