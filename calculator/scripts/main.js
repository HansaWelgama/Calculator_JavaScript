const add=(op)=>{
    calc('+');
}
const sub=(op)=>{
    calc('-');
}
const mul=(op)=>{
    calc('*');
}
const dev=(op)=>{
    calc('/');
}
const mod=(op)=>{
    calc('%');
}
const calc=(op)=>{
    let num1 = 
    document.getElementById("num1").value;
    let num2 = 
    document.getElementById("num2").value;
    let answer = 0;

    switch(op){
     
        case '+' :answer = parseInt(num1)+parseInt(num2); break;
        case '-' :answer = parseInt(num1)-parseInt(num2); break;
        case '*' :answer = parseInt(num1)*parseInt(num2); break;
        case '/' :answer = parseInt(num1)/parseInt(num2); break;
        case '%' :answer = parseInt(num1)%parseInt(num2); break;
        default : break;
    }
    document.getElementById("answer").innerText=answer;
}