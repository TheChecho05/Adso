function turno() {
    let contador = document.getElementById("sumar");
    let valorActual = parseInt(contador.textContent); 
    contador.textContent = valorActual + 1;
    agregar()
}

function agregar() {
    let contador = document.getElementById("sumar");
    let valorActual = parseInt(contador.textContent); 

    let tbody = document.getElementById("turnos");
    let nuevafila = document.createElement("tr");

    let turnofila = document.createElement("td");
    turnofila.textContent = valorActual;
    nuevafila.appendChild(turnofila);

    let botonesfila = document.createElement("td");
    let boton1 = document.createElement("input");
    boton1.type = "button";
    boton1.value = "Confirmar";
    boton1.classList.add("botones1");
    boton1.addEventListener("click", function() {
        botonesfila.style.backgroundColor="#6bfa2d";
    });
    botonesfila.appendChild(boton1);

    let boton2 = document.createElement("input");
    boton2.type = "button";
    boton2.value = "Rechazar";
    boton2.classList.add("botones2");
    boton2.addEventListener("click", function() {
        botonesfila.style.backgroundColor="#f01d06";
    });
    botonesfila.appendChild(boton2);

    nuevafila.appendChild(botonesfila);

    tbody.appendChild(nuevafila);
}
function sumar() {
    let num = document.getElementById("grande").innerText;
    let turnoActual = document.getElementById("sumar").innerText;
    let maximo = parseInt(turnoActual);

    if (parseInt(num) < maximo) {
        document.getElementById("grande").innerText = parseInt(num) + 1;
    }
}
function restar() {
    let num = document.getElementById("grande");
    if (parseInt(num.innerText) > 1) {
        num.innerText = parseInt(num.innerText) - 1;
    }
}
function regresar(){
    location.href = "../../main.html"
}