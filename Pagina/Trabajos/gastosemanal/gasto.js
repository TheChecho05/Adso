function crearDiv() {
    const presupuesto = document.getElementById('presupuesto').value;
    if (presupuesto == "" || presupuesto==0) {
        const alerta = document.createElement('div');
        alerta.textContent = `Su Presupuesto es Nulo o es 0`;
        const div0 = document.getElementById('div0');
        div0.appendChild(alerta);
        setTimeout(function () {
            div0.removeChild(alerta);
        }, 2000);
        return; 
    }
    const presupuestoDiv = document.createElement('div');
    presupuestoDiv.classList.add('div-presupuesto'); 
    presupuestoDiv.textContent = `Presupuesto Inicial: $${presupuesto}`;
    const lado2 = document.querySelector('.lado2');
    lado2.appendChild(presupuestoDiv);

    const restanteDiv = document.createElement('div');
    restanteDiv.classList.add('div-restante'); 
    restanteDiv.textContent = `Restante: $${presupuesto}`;
    const lado3 = document.querySelector('.lado2');
    lado3.appendChild(restanteDiv);

    document.getElementById('presupuesto').value = "";
    
    const quitarpresupuesto = document.getElementById('presupuesto');
    const quitarpresupuestoa = document.getElementById("presupuestoa")
    const quitartitulopresupuesto = document.getElementById("titulopresupuesto")
    quitarpresupuesto.style.display = 'none';
    quitarpresupuestoa.style.display = "none";
    quitartitulopresupuesto.style.display = "none";

    //habilita de nuevo los botones

    document.getElementById('bloquear1').disabled = false;
    document.getElementById('bloquear2').disabled = false;
    document.getElementById('bloquear3').disabled = false;
}


function pagos(){
    // Obtén el valor de presupuesto
    const objeto = document.getElementById('bloquear1').value;
    const precio = document.getElementById("bloquear2").value;

    if(objeto==""||precio==""){
        const alerta = document.createElement('div');
        alerta.textContent = `Uno de los campos esta vacio`;
        const div0 = document.getElementById('div0');
        div0.appendChild(alerta);
        setTimeout(function () {
            div0.removeChild(alerta);
        }, 2000);
        return;
    }
    if(precio=="0"){
        const alerta = document.createElement('div');
        alerta.textContent = `El precio es nulo`;
        const div0 = document.getElementById('div0');
        div0.appendChild(alerta);
        setTimeout(function () {
            div0.removeChild(alerta);
        }, 2000);
        return;
    }
    const restanteDiv = document.querySelector('.div-restante');
    const restante = parseFloat(restanteDiv.textContent.split('$')[1]);
    if (precio > restante) {
        const alerta = document.createElement('div');
        alerta.textContent = `Se compra excede lo que le queda de presupuesto`;
        const div0 = document.getElementById('div0');
        div0.appendChild(alerta);
        setTimeout(function () {
            div0.removeChild(alerta);
        }, 2000);
        return;
    }

    const nuevoRestante = restante - precio;
    restanteDiv.textContent = `Restante: $${nuevoRestante.toFixed(2)}`


    // div grande para los gastos
    const gastoDiv = document.createElement('div');
    gastoDiv.classList.add('gasto');

    const objetoDiv = document.createElement('div');
    const precioDiv = document.createElement('div');
    const emojiDiv = document.createElement('div');
    objetoDiv.textContent = objeto;
    precioDiv.textContent = precio;
    emojiDiv.textContent = "❌";
    emojiDiv.style.cursor = "pointer"; 

    emojiDiv.addEventListener("click", function () {
        const gastoPrecio = parseFloat(precioDiv.textContent);
        const presupuestoActual = parseFloat(restanteDiv.textContent.split('$')[1]);
        const nuevoPresupuesto = presupuestoActual + gastoPrecio;
        restanteDiv.textContent = `Restante: $${nuevoPresupuesto.toFixed(2)}`;
        gastoDiv.remove();
    });


    gastoDiv.appendChild(objetoDiv);
    gastoDiv.appendChild(precioDiv);
    gastoDiv.appendChild(emojiDiv);
    
    const lado2 = document.querySelector('.lado2');
    const listadoTitle = lado2.querySelector('.texto');
    lado2.insertBefore(gastoDiv, listadoTitle.nextSibling);


    // Limpia el campo de presupuesto
    document.getElementById('bloquear1').value ="";
    document.getElementById('bloquear2').value ="";
}

function regresar(){
    location.href = "../../main.html"
}

