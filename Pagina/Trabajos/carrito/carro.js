let productos = [
    {id:1, nombre:"ScoorBunny",naturaleza:"Alegre y Firme", precio:120, img:"imagenes3/813.png"},
    {id:2, nombre:"Grookey", naturaleza:"Alegre y Firme",precio:120, img:"imagenes3/810.png"},
    {id:3, nombre:"Toxapex", naturaleza:"Osada y Serena",precio:120, img:"imagenes3/747.png"},
    {id:4, nombre:"Froakie", naturaleza:"Miedoso",precio:120, img:"imagenes3/656.png"},
    {id:5, nombre:"Sprigatito",naturaleza:"Alegre y Firme", precio:120, img:"imagenes3/906.png"},
    {id:6, nombre:"Charmander", naturaleza:"Miedoso",precio:120, img:"imagenes3/004.png"},
    {id:7, nombre:"Litten", naturaleza:"Agitado y firme",precio:120, img:"imagenes3/725.png"},
    {id:8, nombre:"Rotom", naturaleza:"Modesto y osado", precio:200, img:"imagenes3/479.png"},
    {id:9, nombre:"Beldum", naturaleza:"Alegre y Firme",precio:300, img:"imagenes3/374.png"},
    {id:10, nombre:"Bagon", naturaleza:"Alegre y Firme",precio:150, img:"imagenes3/371.png"},
    {id:11, nombre:"Magikarp", naturaleza:"Alegre y Firme",precio:50, img:"imagenes3/129.png"},
    {id:12, nombre:"Torchic", naturaleza:"Alegre y Firme",precio:120, img:"imagenes3/255.png"},
]
document.addEventListener("DOMContentLoaded",()=>{
pintar()
})

function pintar(){

let fragment = document.createDocumentFragment();
    productos.forEach((item,index)=>{

        let div = document.createElement("div");
        div.classList.add('pokemones');

        let img = document.createElement("div");
        img.classList.add('poke');
        img.style.backgroundImage = `url(${item.img})`;

        let h2 = document.createElement("h2");
        h2.textContent = item.nombre

        let natu = document.createElement("h3")
        natu.textContent = `Naturalezas: ${item.naturaleza}`;

        let p = document.createElement("h3")
        p.textContent = `Precio: $${item.precio}`;

        let button = document.createElement("button")
        button.textContent = "agregar al carrito"

        button.addEventListener("click",()=>{
            console.log(item.id);
        })
        
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(natu)
        div.appendChild(p)
        div.appendChild(button)
        fragment.appendChild(div)
    })
    document.getElementById("contenedor3").appendChild(fragment)
}

//ESTO ES SOLAMENTE MAQUETADO -----------------------------------------------------------------------



//ingresar nuevo producto
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {

  const carritoDiv = document.getElementById("carrito");
  const carritoItemsDiv = document.getElementById("carrito-items");
  let totalDiv = document.getElementById("total");
  let botonBorrarTodoCreado = false;
  const carrito = {};

  function agregarAlCarrito(producto) {
      const productId = producto.id;
      if (carrito[productId]) {
          carrito[productId].cantidad += 1;
      } else {
          
          carrito[productId] = {
              producto: producto,
              cantidad: 1,
          };
      }
      actualizarCarrito();
}

function actualizarCarrito() {
while (carritoItemsDiv.firstChild) {
carritoItemsDiv.removeChild(carritoItemsDiv.firstChild);          
}

agregarBotonBorrarTodo();

function actualizarBotonBorrarTodo() {
    const botonBorrarTodo = document.querySelector(".borrar");

    // Verifica si hay elementos en el carrito para mostrar u ocultar el botón
    if (Object.keys(carrito).length > 0) {
        botonBorrarTodo.style.display = "block";
    } else {
        // Si no hay elementos en el carrito, oculta el botón
        botonBorrarTodo.style.display = "none";
    }
}



function agregarBotonBorrarTodo() {
    // Verificar si el botón ya ha sido creado
    if (!botonBorrarTodoCreado) {
        const botonBorrarTodo = document.createElement("button");
        botonBorrarTodo.classList.add('borrar');
        botonBorrarTodo.textContent = "Borrar Todo";
        
        botonBorrarTodo.addEventListener("click", function () {
            for (const productId in carrito) {
                delete carrito[productId];
            }
            actualizarCarrito();
        });

        const contenedorCarrito = document.getElementById("carrito");
        contenedorCarrito.appendChild(botonBorrarTodo);
        

        // Actualizar la variable para indicar que el botón ya ha sido creado
        botonBorrarTodoCreado = true;
    }
    actualizarBotonBorrarTodo();

}


//ingresar al carro con imagen

let total=0;
    for (const productId in carrito) {
        const carritoItem = carrito[productId];
        const producto = carritoItem.producto;
        const cantidad = carritoItem.cantidad;
            
        const emoji=document.createElement('div');
        emoji.textContent = "❌";
        emoji.classList.add("emoji");

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("carrito-item");
        

        const itemImagen = document.createElement("img");
        itemImagen.src = producto.img;

        const itemNombre = document.createElement("p");
        itemNombre.textContent = `${producto.nombre} x${cantidad}`;

        let itemPrecio = document.createElement("p");
        itemPrecio.textContent = `-Precio:$${producto.precio * cantidad}`;

        total += producto.precio * cantidad;

        itemDiv.appendChild(itemImagen);
        itemDiv.appendChild(itemNombre);
        itemDiv.appendChild(itemPrecio);
        itemDiv.appendChild(emoji)
        carritoItemsDiv.appendChild(itemDiv);
        

        emoji.addEventListener("click", function () {
            if(cantidad==1){
                delete carrito[productId];
            }
            else {
                carrito[productId].cantidad -= 1;
            }
            actualizarCarrito();
        });
        
      }
      totalDiv.textContent = `Total: $${total}`;
  }
  const botonesProductos = document.querySelectorAll(".pokemones button");
  botonesProductos.forEach((boton, index) => {
      boton.addEventListener("click", () => {
          agregarAlCarrito(productos[index]);
      });
  });
});

function cerraryabrir() {
  var div = document.getElementById("carrito-items");

  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
    
  } else {
    div.style.display = "none";
  }
}
function regresar(){
    location.href = "../../main.html"
}