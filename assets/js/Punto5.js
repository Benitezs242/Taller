let tablas = [1,2,3,4,5,6,7,8,9,10]

fMulti.addEventListener("submit", (e) => {
    e.preventDefault();
    let Operador = e.target.iNumero.value
    console.log(Operador)

    tablas.forEach(Multiplicador => {
        let Resultado = Operador * Multiplicador
        
        document.querySelector("#TablaMultiplicar").innerHTML += `
        <div class="card textos d-flex">
            <strong>${Operador} X ${Multiplicador} = ${Resultado} </strong>                                               
        </div>
        `  
})
})
