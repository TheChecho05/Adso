const datos=[];

function enviar(){
    let registro={
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("lastname").value,
        tipo_documento: document.getElementById("doc").value,
        documento: document.getElementById("numdoc").value,
        email: document.getElementById("correo").value,
        tel: document.getElementById("numtel").value,
        f_nacimiento: document.getElementById("fecha").value,
        genero: document.getElementById("gen").value,
}
datos.push(registro)
alert("USTED SE HA REGISTRADO")
console.log(datos)
}

