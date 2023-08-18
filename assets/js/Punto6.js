let matricula = 1000000
fPromedio.addEventListener("submit", (e) => {
    e.preventDefault();
    let ipromeedio = e.target.iPromedio.value
    if (ipromeedio < 3) {
        let Resultado = document.querySelector("#Resultados")
        Resultado.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
                <h5 class="card-title">Resultado</h5>
          <p class="card-text">Que va a reclamar?<p>
        </div>
      </div>
        `
    }
    if (ipromeedio >= 3) {
        if (ipromeedio <= 4) {
            let promedio1 = matricula * 0.05
            let Resultado = document.querySelector("#Resultados")
            Resultado.innerHTML += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                    <h5 class="card-title">Resultado</h5>
              <p class="card-text">El descuento obtenido es de <strong>${promedio1}</strong><p>
          <p> Animo tu puedes</p>
              </div>
          </div>
            `
        }
    } if (ipromeedio > 4) {
        let promedio2 = matricula * 0.5

        let Resultado = document.querySelector("#Resultados")
        Resultado.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
                <h5 class="card-title">Resultado</h5>
          <p class="card-text">El descuento obtenido es de <strong>${promedio2}</strong><p>
          <p> Sigue asi</p>
        </div>
      </div>
        `
    }
})










// <!-- 1000000 x 0.05 = 50000 -->
// <!-- 1000000 x 0.5 = 500000 -->