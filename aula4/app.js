/*
var nome = "Joel Manuel";
var idade = 24;

for(let i = 1; i <=12; i++ ) {
       
    const resultado = 7 * i;

    document.writeln(`7 x ${i} = ${resultado} <br> `);
      
}
*/

const botao = document.getElementById('botao'); 
const resultado = document.getElementById('resultado'); 
 
 
let contador = 0; 
 
 
botao.addEventListener('click', function(){ 
 
    contador++; 
 
    if(contador === 1){ 
        resultado.textContent = `Voce clicou ${contador} vez`; 
 
    } 
  
    else{ 
        resultado.textContent= `Voce clicou ${contador} vezes`; 
    } 
 
     
});

