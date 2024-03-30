const add=()=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = parseInt(num1)+parseInt(num2);
    document.getElementById("answer").innerText=answer
}
const sub=()=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = parseInt(num1)-parseInt(num2);
    document.getElementById("answer").innerText=answer
}
const mul=()=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = parseInt(num1)*parseInt(num2);
    document.getElementById("answer").innerText=answer
}
const dev=()=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = parseInt(num1)/parseInt(num2);
    document.getElementById("answer").innerText=answer
}
const mod=()=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = parseInt(num1)%parseInt(num2);
    document.getElementById("answer").innerText=answer
}