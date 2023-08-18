let menuCompleto = [
    { id: "1", Comida: 'Hamburguesa', Precio: 20000 },
    { id: "2", Comida: 'Pizza', Precio: 10000 },
    { id: "3", Comida: 'Salchipapa', Precio: 15000 },
    { id: "4", Comida: 'Perros Calientes', Precio: 10000 },
    { id: "5", Comida: 'Patacones', Precio: 13000 },
];
let menuElegido = []

let grilaMenu = document.querySelector("#grillamennu")

for (let selector = 0; selector < menuCompleto.length; selector++) {
    grilaMenu.innerHTML += `
    <div class="card" style="width: 10rem">
        <div class="card-body">
            <div class="card-title">${menuCompleto[selector].Comida}</div>
            <div class="card-text">${menuCompleto[selector].Precio} </div>
        </div>
    </div>
        `
}

fComida.addEventListener("submit", (e) => {
    e.preventDefault();
    let comidaEscrita = e.target.iComida.value
    if (comidaEscrita != "pagar") {
        let arraycomida = menuCompleto.filter(arraycomida => arraycomida.Comida == comidaEscrita)
        menuElegido.push(arraycomida[0])

        let grilaMenuElegida = document.querySelector("#grillamennuelegida")
        
        if(menuElegido.length == 1){
    
            grilaMenuElegida.innerHTML += `
        <div class="card"  style="width: 18rem;">
            <div class="card-header d-flex align-content-center justify-content-center">
                TU ORDEN
            </div>
                <ul id="ListaClieente" class="list-group list-group-flush">

                </ul>
            </div>
            `
        }
        document.querySelector("#ListaClieente").innerHTML = ""

        menuElegido.forEach(element => {

            document.querySelector("#ListaClieente").innerHTML += `
            
            <li class="list-group-item ">
            <div class=" d-flex justify-content-around">
                <div>
                    ${element.Comida}                          
                </div>
                <div>
                    ${element.Precio}                           
                </div>
            </div>
            
        </li>`
        });
    } else {
        let preciosCuenta = 0
        menuElegido.forEach(Cajero => {
            preciosCuenta = preciosCuenta + Cajero.Precio  
        })
        document.querySelector("#ListaClieente").innerHTML += `           
                <div class=" d-flex justify-content-around">
                <div>
                La cuenta Total fue:                           
            </div>
                    <div class=" d-flex justify-content-around">
                        ${preciosCuenta}                          
                    </div>
                </div>
            `
    }
}
)
