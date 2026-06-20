const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");
const countLabel = document.getElementById("countLabel");
let count = 0 ; 
increment.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decrement.onclick = function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}