<template>
<div class="plantilla">
  <div class="fondo">
    <h2>Agenda de Tareas semanales</h2>
    <input type="text" placeholder="Ingrese la Actividad" class="input1" v-model="actividad">
    <input type="date" class="input1" v-model="fecha">
    <input type="checkbox" class="input1" v-model="box">
    <input type="button" class="input2" value="agendar" @click="guardar()">
    <h3 :style="alerta==='Formulario enviado correctamente'?'color:green':''">{{alerta}}</h3>
  </div>
    <table>
      <thead>
        <tr class="tr1">
          <th>Actividad</th>
          <th>Fecha</th>
          <th>Prioridad</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in registros"
          :key="i"
          :style="{
            backgroundColor: item.prioridad === 'alta' ? 'red' : '',
            color: item.prioridad === 'alta' ? 'white' : '',
          }"
        >
          <td>{{item.actividad}}</td>
          <td>{{item.fecha}}</td>
          <td>{{item.prioridad}}</td>
          <td>
            <button @click="eliminar(i)">❌</button>
          </td>
        </tr>

      </tbody>
    </table>
    <input type="button" class="input2" value="ordenar" @click="ordenar()">
  </div>
</template>


<script setup>
import {ref} from "vue" 
const actividad=ref("")
const fecha=ref("")
const box=ref("")
const registros=ref([])
let alerta = ref("")

function ocultarAlerta() {
  setTimeout(() => {
  alerta.value = "";
}, 3500)
}

function guardar(){
  if (actividad.value === "") {
    alerta.value = "El campo actividad no puede estar vacio"
    ocultarAlerta()
  }
  else if (fecha.value === "") {
    alerta.value = "El campo fecha no puede estar vacio"
    ocultarAlerta()
  }
  else{ 
  registros.value.push({
    actividad:actividad.value,
    fecha:fecha.value,
    prioridad:box.value?'alta':'baja'
  })
  console.log(registros)
  borrar()
}
}
function eliminar(i){
  registros.value.splice(i,1)
}

function borrar(){
  actividad.value=""
  fecha.value=""
  box.value=""
}
function ordenar() {
  return registros.value.sort((a, b) => {
    if (a.prioridad === "alta") return -1;
    if (b.prioridad === "alta") return 1;
    return 0;
  });
}
</script>

<style scoped>
  body{
    margin: 0;
  }
  *{
    margin: 0;
  }
  .plantilla{
    display: grid;
    justify-content: center;
    background-color: antiquewhite;
  }
  h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 5%;
    text-align: center;
  }
  .fondo{
    margin-top: 10%;
    background-color: rgb(255, 255, 255);
    height: auto;
    width: 400px;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 4px solid black;
    
  }
  .input1 {
  background: #dae4dc;
  height: 30px;
  
  border-radius: 4px;
  border: 1px solid #d9dce2;
  font-family: 'calibri';
  font-size: 18px;
  color: rgb(7, 7, 7);
  margin-top: 5%;
}
  .input2{
  background: #dae4dc;
  height: 30px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #d9dce2;
  font-family: 'calibri';
  font-size: 18px;
  color: rgb(7, 7, 7);
  margin-top: 5%;
  cursor: pointer;
  margin-bottom: 5%;
  justify-self: center;
}

table {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-collapse: collapse;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10%;
  border-radius: 15px;
}

th, tr, td{
  border: 4px solid rgb(46, 47, 45);
}
</style>
