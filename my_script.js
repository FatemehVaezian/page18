function user_name(){
    let name = document.getElementById("yourname_id").value;
    document.getElementById("user").innerText = name;
}
function welcomeMessage(){
    let name = document.getElementById("yourname_id").value;
    alert("hi "+ name + " welcome to my site");
}
function addition(){
    let num1 = document.getElementById("number1").value; 
    let num2 = document.getElementById("number2").value;
    let add = Number(num1)+Number(num2);
    document.getElementById("result").innerText = add;
}
function subtraction(){
    let num1 = document.getElementById("number1").value; 
    let num2 = document.getElementById("number2").value;
    let sub = Number(num1)-Number(num2);
    document.getElementById("result").innerText = sub;
} 
function multiplication(){
    let num1 = document.getElementById("number1").value; 
    let num2 = document.getElementById("number2").value;
    let multi = Number(num1)*Number(num2);
    document.getElementById("result").innerText = multi;
}
function division(){
    let num1 = document.getElementById("number1").value; 
    let num2 = document.getElementById("number2").value;
    let div = Number(num1)/Number(num2);
    document.getElementById("result").innerText = div;
}
function startColorInput(){
    event.target.style.background = "pink";
}
function endColorInput(){
    event.target.style.background = "";
}
function startColorButtons(){
    event.target.style.background = "blue";
}
function endColorButtons(){
    event.target.style.background = "";
}

