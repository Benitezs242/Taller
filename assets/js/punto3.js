let fingreso = document.querySelector("#FIngreso")

let Resultadohombre = "una pizza tres carnes"
let Resultadomujer = "Una pizza Hawaiana"
let edad = "Un jugo"
let edadMayor = "una Cerveza"
fingreso.addEventListener("submit", (e) => {
    e.preventDefault();
    let iSexxo = e.target.isexo.value
    let iEdaad = e.target.iedad.value
    if (iSexxo == "" || iEdaad == "") {
        alert("Faltan Datos")
        return
    }
    if (iSexxo == "hombre" || iSexxo == "Hombre") {
        if (iEdaad <= 10) {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Ganaste ${edad} y ${Resultadohombre}</strong>                                               
            </div>
            `      
        }else if (iEdaad >= 18) {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Ganaste ${edadMayor} y ${Resultadohombre}</strong>                         
            </div>
            `
        }else {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Desafortunadamente no ganas nada</strong>                         
            </div>
            `
        }
    } else if (iSexxo == "Mujer" || "mujer") {
        if (iEdaad <= 10) {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Ganaste ${edad} y ${Resultadomujer}</strong>                                               
            </div>
            `
        } else if (iEdaad >= 18) {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Ganaste ${edadMayor} y ${Resultadomujer}</strong>                         
            </div>
            `  
        }else {
            document.querySelector("#Ganador").innerHTML += `
            <div class="textos d-flex">
                <strong>Desafortunadamente no ganas nada</strong>                         
            </div>
            `
        }
    }
})
