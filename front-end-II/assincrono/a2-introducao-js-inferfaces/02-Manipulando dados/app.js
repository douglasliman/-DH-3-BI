let a = parseInt("22"); 
let b = parseInt(prompt("Introduza idade")); 
let c = parseInt(b+"150"); 
let d = parseInt(b+150) 
let e = parseInt(b+parseInt("150")); 
// let f = parseInt(b+.55); // PARSEINT NÃO SERVE PARA NUMEROS QUEBRADOS
let f = parseFloat(b+.55); 
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
console.log(f); 

if(b>18){ 
console.log("É maior de idade"); 
}else{ 
console.log("É menor de idade"); 
} 
