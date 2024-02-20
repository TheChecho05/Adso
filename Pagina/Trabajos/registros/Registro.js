const datos=[];

function enviar() {
    let nombre = document.getElementById("name").value;
    let apellidos = document.getElementById("lastname").value;
    let tipo_documento = document.getElementById("doc").value;
    let documento = document.getElementById("numdoc").value;
    let email = document.getElementById("correo").value;
    let tel = document.getElementById("numtel").value;
    let f_nacimiento = document.getElementById("fecha").value;

    let alertaElement = document.querySelector(".alerta");

    alertaElement.textContent = "";

    if (nombre=="") {
        alertaElement.textContent = "El campo nombre está vacío.";
        ocultarAlerta(alertaElement);
        return;
    }

    else if(apellidos=="") {
        alertaElement.textContent = "El campo apellidos está vacío.";
        ocultarAlerta(alertaElement);
        return;
    }
    else if (documento=="" || documento.length < 8) {
        alertaElement.textContent = "El número de documento debe tener al menos 8 dígitos.";
        ocultarAlerta(alertaElement);
        return;
    }

    else if (email=="" || !email.includes("@")) {
        alertaElement.textContent = "Por favor, ingrese un correo electrónico válido.";
        ocultarAlerta(alertaElement);
        return;
    }

    else if (tel=="" || tel.length < 10) {
        alertaElement.textContent = "El número de teléfono debe tener al menos 10 dígitos.";
        ocultarAlerta(alertaElement);
        return;
    }

    else if (f_nacimiento=="") {
        alertaElement.textContent = "El campo fecha de nacimiento está vacío.";
        ocultarAlerta(alertaElement);
        return;
    }

    let registro = {
        nombre: nombre,
        apellidos: apellidos,
        tipo_documento: tipo_documento,
        documento: documento,
        email: email,
        tel: tel,
        f_nacimiento: f_nacimiento,
        genero: document.getElementById("gen").value
    };

    datos.push(registro);
    alertaElement.textContent = "Se ha registrado con exito :D";
    console.log(datos);
    limpiar();
}

function limpiar(){
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("doc").value = "";
    document.getElementById("numdoc").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("numtel").value = "";
    document.getElementById("fecha").value = "";
}

function ocultarAlerta(element) {
    setTimeout(() => {
        element.textContent = "";
    }, 3000);
}

function regresar(){
    location.href = "../../main.html"
}