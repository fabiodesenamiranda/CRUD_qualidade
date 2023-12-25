//Dar bom nome em variáveis

var n1 = 10;  
var n2 = 20;  

console.log(n1 + n2);

// Como devs, o que mais fazemos é ler códigos
// Contexto é extremamente importante

const useFirstInputNumber = 10;
const useSecondInputNumber = 20;

console.log(useFirstInputNumber + useSecondInputNumber);

//============

var inputDoUsuario;

//No Browser
// - string
// - elemento do dom

const inputDoUsuario = document.querySelector("input").value;
const $inputDoUsuario = document.querySelector("input"); // $ indica que é um elemento do DOM

// Booleanos
//<input value=""
document.querySelector("input").hasAttribute("value"); //true | value

if(hasSomething || isAnithing){}
if(!hasSomething){}

//should
if(shouldOpen){}