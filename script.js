const proyectos = [
  {
    id: 0,
    img: "img/Summerhousesale.jpg",
    titulo: "Venta de Casa BienesRaices",
    textarea: "En este proyecto Venta de Casa BienesRaices ofrece servicios de compra y venta de casa y departamentos, cuenta con una interfaz sencilla y amigable, donde el usuario puede interactuar con el vendedor mediante la sección de contacto. Aplique CSS, HTML Y JavaScript, mejorando y afinando los conocimientos",
    enlace: "https://summerhousesale.netlify.app/",
  },
  {
    id: 1,
    img: "img/Storejacket.jpg",
    titulo: "Venta de Camisetas",
    textarea: "En este proyecto mejore el aprendizaje GRID y FLEX, es un sitio web para venta de camisetas, adaptable a cualquier producto donde se puede actualizar las imágenes y precios, en el aparto de nosotros encontrara información de la empresa.",
    enlace: "https://storejacket.netlify.app/",
  },
  {
    id: 2,
    img: "img/Blogcafeandcourse.jpg",
    titulo: "Cafe y cursos",
    textarea: "Sitio web donde el cliente puede colocar curso sobre la realización de cafés, se realizo utilizando HTML CSS de manera responsive design ajustando las imágenes y los textos a medida para ser utilizado en un dispositivo celular",
    enlace: "https://blogcafeandcourse.netlify.app/",
  },
  {
    id: 3,
    img: "img/Musicandrock.jpg",
    titulo: "Concierto de Rock",
    textarea: "Sitio web para la información general de un concierto adaptable a dispositivos con una interfaz agradable, las imágenes con funcionales de JavaScript puedes ser vista de manera panorámica, se mejoro los conocimientos de HTML CSS Y JAVASCRIPT.",
    enlace: "https://musicandrock.netlify.app/",
  },
  {
    id: 4,
    img: "img/Pokedexpokemontemporada1.jpg",
    titulo: "Pokedex Pokemon 1ra Temporada",
    textarea: "Sitio web para poder conocerte el consumo de una API se realizo el proyecto de pokedex de pokemon para poder buscar pokemones por su especialidad, adaptable a distintos dispositivos. El consumo de la API se realizo mediante JavaScript.",
    enlace: "https://pokedexpokemontemporada1.netlify.app/",
  },
  {
    id: 5,
    img: "img/Localtimeanddate.jpg",
    titulo: "Hora local",
    textarea: "Sitio web sencilla para reforzar el tema de funciones en JavaScript getDate, toLocaleTimeString y setInterval, donde nos muestra la hora de manera local y la fecha correspondiente.",
    enlace: "https://localtimeanddate.netlify.app/",
  },
  {
    id: 6,
    img: "img/Calculatorbasicoperation.jpg",
    titulo: "Calculadora Operaciones Basicas",
    textarea: "Calculadora básica para poder reforzar la lógica de la programación con los signos matemáticos, se puede realizar operaciones + - / * que nos muestra resultados correspondientes a cada operación clickeada",
    enlace: "https://calculatorbasicoperation.netlify.app/",
  },
  {
    id: 7,
    img: "img/Saleofheadset.jpg",
    titulo: "Servicio de venta de auriculares",
    textarea: "Sitio web donde se realizo la venta de un producto tecnológico, tiene una interfaz agradable y se realizo de manera adaptable a distintos dispositivos tecnológicos, se tomo en cuenta de evento “click” en JavaScript para darle dinamismo a la página.",
    enlace: "https://saleofheadset.netlify.app/",
  },
  {
    id: 8,
    img: "img/Ecommerce.jpg",
    titulo: "Pagina de venta de muebles",
    textarea: "Sitio web donde se realizo la venta de muebles, tiene una interfaz agradable y se realizo de manera adaptable a distintos dispositivos tecnológicos.",
    enlace: "https://ecommerceauccapoma.netlify.app/",
  },
];

function buscaryrenderizar(id) {
  const proyecto = proyectos.find((proyecto) => {
    if (proyecto.id == id) {
      return true;
    }
  });

  if (!proyecto) return;
  const img = document.querySelector(".modal-container .modal img");
  const titulo = document.querySelector(".modal-container .modal h2");
  const textarea = document.querySelector(".modal-container .modal p");
  const enlace = document.querySelector(".modal-container .modal .footer-modal a");
  img.setAttribute("src", proyecto.img);
  titulo.innerHTML = proyecto.titulo;
  textarea.innerHTML = proyecto.textarea;
  enlace.setAttribute("href", proyecto.enlace);
}

let menuVisible = false;

function mostrarOcularMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//modal
const btncerrar = document.getElementById("btncerrar");
const divcerrar = document.getElementById("divcerrar");

let pro = document.querySelectorAll(".cta");

for (let i = 0; i < pro.length; i++) {
  pro[i].addEventListener("click", (e) => {
    e.preventDefault();
    myfunctionAbrir(i);
  });
}

btncerrar.addEventListener("click", myfunctionCerrar);
divcerrar.addEventListener("click", myfunctionCerrar);

function myfunctionAbrir(id) {
  buscaryrenderizar(id);

  let modalC = document.querySelector(".modal-container");
  let modal = document.querySelector(".modal");

  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.remove("modal-close");
}

function myfunctionCerrar(e) {
  e.preventDefault();
  let modalC = document.querySelector(".modal-container");
  let modal = document.querySelector(".modal");
  modal.classList.add("modal-close");
  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 900);
}
