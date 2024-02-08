const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaProductos = document.getElementById("lista-de-productos");
const inputFiltro = document.getElementById("filtro-input");
const botonFiltro = document.getElementById("filtro-boton");

const crearElementoProducto = (producto) => {
  const divProducto = document.createElement("div");
  divProducto.classList.add("producto");

  const tituloProducto = document.createElement("p");
  tituloProducto.classList.add("titulo");
  tituloProducto.textContent = producto.nombre;

  const imagenProducto = document.createElement("img");
  imagenProducto.src = producto.img; // Practicar

  divProducto.appendChild(tituloProducto);
  divProducto.appendChild(imagenProducto);

  return divProducto;
}

// Muestra los productos en pantalla.
const displayProductos = (productos) => {
  // Limpia la lista actual antes de agregar nuevos elementos
  listaProductos.innerHTML = ''; 
  productos.forEach(producto => {
    listaProductos.appendChild(crearElementoProducto(producto));
  });
}

// Filtra los productos
const filtrarProductos = () => {
  const textoFiltro = inputFiltro.value.toLowerCase(); // Pasa el valor a minusculas
  const productosFiltrados = productos.filter(producto => 
    producto.tipo.toLowerCase().includes(textoFiltro) || producto.color.toLowerCase().includes(textoFiltro)
  );
  displayProductos(productosFiltrados);
}

botonFiltro.addEventListener("click", filtrarProductos);

// Inicialmente mostrar todos los productos
displayProductos(productos);