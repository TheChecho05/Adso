<template>
  <div class="fondo">
    <div class="inicio" v-show="mostrarCuerpo">
      <h2>Nombre:</h2>
      <input type="text" class="caja1" placeholder="Digite un nombre" v-model="nombreTemporal">
      <h2>Contraseña:</h2>
      <input type="text" class="caja1" placeholder="Digite una contraseña" v-model="contraseña">
      <h2>Monto Inicial:</h2>
      <input type="number" class="caja1" placeholder="Monto Inicial:" v-model="montoTemporal">
      <input type="button" class="boton" value="Enviar" @click="enviar()" >
      <h3 :style="alerta==='Formulario enviado correctamente'">{{ alerta }}</h3>
    </div>
    <div class="titulo">
      <h1>Saldo Inicial:{{monto}}</h1>
    </div>
    <div class="division">
      <div class="acciones">
        <h2>Usuario actual:{{nombre}}</h2>
        <select class="caja2" value="ingret" :disabled="Desactivado" v-model="acciones">
          <option value="Ingresar">Ingresar</option>
          <option value="Retirar">Retirar</option>
        </select>
        <input type="number" class="caja2" placeholder="Ingrese la cantidad" :disabled="Desactivado" v-model="cantidad">
        <h3 :style="alerta2==='Formulario enviado correctamente'">{{ alerta2 }}</h3>
        <input type="button" class="boton" value="Ejecutar" @click="ejecutar()" :disabled="Desactivado" >
      </div>

      <div class="billetes">
        <h2>Billetes de 100 Mil Ha recibido:</h2>
        <h2>Billetes de 50 Mil Ha recibido:</h2>
        <h2>Billetes de 20 Mil Ha recibido:</h2>
        <h2>Billetes de 20 Mil Ha recibido:</h2>
      </div>
    </div>
    <div class="cuenta" v-show="mostrarCuenta">
      <h2>Nombre:</h2>
      <input type="text" class="caja1" placeholder="Digite un nombre" v-model="nombrever">
      <h2>Contraseña:</h2>
      <input type="text" class="caja1" placeholder="Digite una contraseña" v-model="contraseñaver">
      <input type="button" class="boton" value="Verificar" @click="validar()" >
      <h3 :style="alerta3==='Formulario enviado correctamente'">{{ alerta3 }}</h3>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  let mostrarCuerpo = ref(true);
  let mostrarCuenta = ref(false);

  const nombreTemporal = ref("")
  let nombre = ref("")
  const contraseña = ref("")
  const montoTemporal = ref(0)
  let monto = ref(0)

  let acciones =ref("")
  let cantidad =ref()

  let nombrever = ref("")
  let contraseñaver = ref("")

  let alerta = ref("")
  let alerta2 = ref("")
  let alerta3 = ref("")

  const usuario = ref([])
  let bd=true
  let Desactivado = ref(true);
  
function ocultarAlerta() {
  setTimeout(() => {
  alerta.value = "";
}, 3500)
}
function ocultarAlerta2() {
  setTimeout(() => {
  alerta2.value = "";
}, 3500)
}
function ocultarAlerta3() {
  setTimeout(() => {
  alerta3.value = "";
}, 3500)
}


function enviar(){ 
if(bd==true){
  if (nombreTemporal.value === "") {
    alerta.value = "El campo nombre no puede estar vacio"
    ocultarAlerta()
  }
  else if (contraseña.value === "") {
    alerta.value = "El campo contraseña no puede estar vacio"
    ocultarAlerta()
  }
  else if (montoTemporal.value === "") {
    alerta.value = "El campo monto no puede estar vacio"
    ocultarAlerta()
  }
  else if (montoTemporal.value < 1) {
    alerta.value = "El campo monto no puede ser 0 o negativo"
    ocultarAlerta()
  }
  else if (montoTemporal.value % 10000 !== 0) {
      alerta.value = "La cantidad ingresada es muy pequeña para ser trabajada";
      ocultarAlerta();
  }
  else {
      alerta.value = "Formulario enviado correctamente"
      ocultarAlerta()
      usuario.value.push({
        nombre: nombreTemporal.value,
        contraseña: contraseña.value,
        monto: montoTemporal.value,
      })
      nombre.value= nombreTemporal.value;
      monto.value = montoTemporal.value;
      console.log(usuario)
      mostrarCuerpo.value = false;
      Desactivado.value = false;
  }
}}

function ejecutar(){
  if(acciones.value == "Ingresar") {
    if (cantidad.value % 10000 === 0) {
      monto.value = monto.value + cantidad.value;
      alerta2.value = "Ingreso realizado correctamente";
      ocultarAlerta2();
      cantidad.value = "";
    } else {
      alerta2.value = "No tenemos billetes para esa cantidad";
      ocultarAlerta2();
    }
  } else {
    if (cantidad.value % 10000 === 0) {
      if (cantidad.value <= monto.value) {
        mostrarCuenta.value = ref(true);
      } else {
        alerta2.value = "No tiene suficiente saldo para realizar este retiro";
        ocultarAlerta2();
      }
    } else {
      alerta2.value = "No tenemos billetes para esa cantidad";
      ocultarAlerta2();
    }
  }
}
function validar() {
    if (nombrever.value === nombre.value && contraseñaver.value === contraseña.value) {
        const retiro = cantidad.value;
        const billetes = calcularBilletes(retiro);

        const billete100Text = billetes.billete100 > 0 ? `${billetes.billete100} de 100 mil` : "";
        const billete50Text = billetes.billete50 > 0 ? `${billetes.billete50} de 50 mil` : "";
        const billete20Text = billetes.billete20 > 0 ? `${billetes.billete20} de 20 mil` : "";
        const billete10Text = billetes.billete10 > 0 ? `${billetes.billete10} de 10 mil` : "";

        document.querySelector(".billetes h2:nth-child(1)").innerText = `Billetes de 100 Mil Ha recibido: ${billete100Text}`;
        document.querySelector(".billetes h2:nth-child(2)").innerText = `Billetes de 50 Mil Ha recibido: ${billete50Text}`;
        document.querySelector(".billetes h2:nth-child(3)").innerText = `Billetes de 20 Mil Ha recibido: ${billete20Text}`;
        document.querySelector(".billetes h2:nth-child(4)").innerText = `Billetes de 10 Mil Ha recibido: ${billete10Text}`;

        monto.value = monto.value - cantidad.value;
        cantidad.value = "";
        alerta3.value = "Retiro realizado correctamente";
        ocultarAlerta3();
        nombrever.value = "";
        contraseñaver.value = "";
        mostrarCuenta.value = false; 
        Desactivado.value = false; 
    } else {
        alerta3.value = "El nombre o la contraseña no coinciden";
        ocultarAlerta3();
    }
}
function calcularBilletes(monto) {
    let billete100 = Math.floor(monto / 100000);
    monto = monto % 100000;

    let billete50 = Math.floor(monto / 50000);
    monto = monto % 50000;

    let billete20 = Math.floor(monto / 20000);
    monto = monto % 20000;

    let billete10 = Math.floor(monto / 10000);

    return {
        billete100: billete100,
        billete50: billete50,
        billete20: billete20,
        billete10: billete10
    };
}

</script>
<style scoped>
body{
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
h3,h2,h1{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  margin-bottom: 0;
}
.inicio{
  background-color: white;
  height: auto;
  width: 400px;
  justify-self: center;
  border: 5px solid black;
  border-radius: 15px;
  display: grid;
  position: absolute;
  top: 65px;
  padding: 10px;
  z-index: 999;
}
.cuenta{
  background-color: white;
  height: auto;
  width: 400px;
  justify-self: center;
  border: 5px solid black;
  border-radius: 15px;
  display: grid;
  position: absolute;
  bottom: 10px;
  padding: 10px;
  z-index: 999;
}
.fondo{
  background-color: antiquewhite;
  height: 100vh;
  display: grid;
}
.titulo{
  margin-top: 20px;
  display: grid;
  justify-self: center;
  background-color: white;
  text-align: center;
  border: 5px solid black;
  border-radius: 15px;
  width: 50%;
  height: 60px;
}
.division{
  display: grid;
  grid-template-columns: repeat(2,1fr);;
}
.acciones,.billetes{
  width: 80%;
  margin-left: 10%;
}
.acciones{
  background-color: rgb(251, 251, 251);
  height: 260px;
  display: grid;
  border-radius: 15px;
  border: 5px solid black;
  padding: 10px;
}
.caja1{
  width: auto;
  height: 40px;
  background: #dae4dc;
  border-radius: 4px;
  border: 1px solid #d9dce2;
  font-family: 'calibri';
  font-size: 18px;
  color: rgb(7, 7, 7);
}
.caja2{
  width: auto;
  height: 40px;
  background: #dae4dc;
  border-radius: 4px;
  border: 1px solid #d9dce2;
  font-family: 'calibri';
  font-size: 18px;
  color: rgb(7, 7, 7);
  margin-top: 2%;
}
.boton{
  margin-top: 5%;
  width: 20%;
  background: #e05649;
  padding: 12px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  justify-self: center;
}
.billetes{
  background-color: rgb(251, 251, 251);
  height: 260px;
  display: grid;
  border-radius: 15px;
  border: 5px solid black;
  padding: 10px;
}
</style>
