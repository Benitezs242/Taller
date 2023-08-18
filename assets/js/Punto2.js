let fIngreso = document.querySelector("#FIngreso")
fIngreso.addEventListener("submit", (evento) => {
    evento.preventDefault();
    //se usa el resto
    let inumero = evento.target.iNumero.value
    if (evento == "") {
        document.querySelector("#Resultado").innerHTML == "" 
        alert("y los numeros")
    }
    if (inumero % 2 == 0) {
        document.querySelector("#Resultados").innerHTML += `
        <div class="textos d-flex">
            <strong>Par</strong>                         
        </div>
`
    } else {
        document.querySelector("#Resultados").innerHTML += `
        <div class="card textos d-flex">
            <strong>impar </strong>                         
        </div>
`
    }
})
