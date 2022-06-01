var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}
function colorChange() {

   var elemento =  document.getElementById('currentNumber');

    if (currentNumber < 0) {
        //elemento.classList.contains('green') ? elemento.classList.replace("green", "red") : elemento.classList.add("red");
        elemento.classList.remove("green");
        elemento.classList.remove("black");
        elemento.classList.add("red");
    } else if(currentNumber > 0){
        //elemento.classList.contains('red') ? elemento.classList.replace("red", "green") : elemento.classList.add("green");
        elemento.classList.remove("red");
        elemento.classList.remove("black");
        elemento.classList.add("green");
    }else{
        elemento.classList.remove("green");
        elemento.classList.remove("red");
        elemento.classList.add("black")


    }
}



/* var cor = document.getElementById("input-cor").value;
  document.getElementById("titulo").style.color = cor; */