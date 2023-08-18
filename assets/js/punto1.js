let fIngreso = document.querySelector("#FIngreso")
fIngreso.addEventListener("submit", (evento) => {
    evento.preventDefault();
let suma = 0
let inumero = evento.target.iNumero.value
for (let i = 1; i <= inumero; i++) {
    suma += i;
    document.querySelector("#Resultado").innerHTML == "" 

    document.querySelector("#Resultado").innerHTML += `
<div class="card textos">
    <strong>La suma de los números del 1 al ${i} es: ${suma} </strong>                         
</div>
`  
}
        
})


