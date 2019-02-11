let menu_mobile_opened = false;
let menu_opened = false;

function clickOnSection(section, mobile){
    if(mobile){
        menu_mobile_opened = true;
        clickMenuMobile();
    }
    if(location.pathname !== '/'){
        window.location.href = `/${section}`; 
    } else {
        window.location.hash = section;
    }
}

/**MENU MOBILE **/

const contenedor_btn_menu_mobile = document.getElementById('contenedor-btn-menu-mobile');
const contenedor_opciones_mobile = document.querySelector('#columna-menu-mobile #contenedor-opciones-mobile');
const contenedor_partegris = document.getElementById('contenedor-partegris');
const linea_sup = document.getElementById('linea-sup');
const linea_mid = document.getElementById('linea-mid');
const ico_tak_menu_mobile = document.getElementById('ico-tak-menu-mobile');

const btn_nav_Productos_mobile = document.getElementById('btn-nav-Productos-mobile');
const span_titulo_menu_mobile = document.getElementById('span-titulo-menu-mobile');
const titulo_menu_productos_mobile = document.getElementById('titulo-menu-productos-mobile');
const btn_menu_volver_mobile = document.getElementById('btn-menu-volver-mobile');
const nav_izquierdo_mobile = document.getElementById('nav-izquierdo-mobile');
const nav_derecho_mobile = document.getElementById('nav-derecho-mobile');

const go_menu_quienesSomos_mobile = document.getElementById('go-menu-quienesSomos-mobile');
const go_menu_clientesPartners_mobile = document.getElementById('go-menu-clientesPartners-mobile');
const go_menu_contactanos_mobile = document.getElementById('go-menu-contactanos-mobile');


function fadeOut(fadeTarget, time) {
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
}

function fadeIn(el, time) {
    el.style.opacity = 0;
  
    let last = +new Date();
    let tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
}

function clickMenuMobile (){
    if(menu_mobile_opened){
        fadeOut(contenedor_opciones_mobile, 400);

        contenedor_partegris.style.backgroundClip = "transparent";

        linea_sup.classList.remove("tira-x");
        linea_mid.classList.remove("tira-x");

        ico_tak_menu_mobile.style.display = "none";

        menu_mobile_opened = false;
    } else {
        fadeIn(contenedor_opciones_mobile, 400);

        contenedor_partegris.style.backgroundClip = "rgba(95, 95, 95, 0.9)";

        linea_sup.classList.add("tira-x");
        linea_mid.classList.add("tira-x");

        ico_tak_menu_mobile.style.display = "block";

        menu_mobile_opened = true;
    }
}

function clickOnProductosMobile(){
    [span_titulo_menu_mobile, titulo_menu_productos_mobile, btn_menu_volver_mobile].forEach((e) => e.style.visibility = "visible");
    nav_izquierdo_mobile.style.left = "-100%";
    nav_derecho_mobile.style.right = "0%";
}

function clickOnMenuVolverMobile(){
    [span_titulo_menu_mobile, titulo_menu_productos_mobile, btn_menu_volver_mobile].forEach((e) => e.style.visibility = "hidden");
    nav_izquierdo_mobile.style.left = "0%";
    nav_derecho_mobile.style.right = "-100%";
}

contenedor_btn_menu_mobile.addEventListener('click', clickMenuMobile);
btn_nav_Productos_mobile.addEventListener('click', (e) => {e.preventDefault(); clickOnProductosMobile;} );
btn_menu_volver_mobile.addEventListener('click', (e) => {e.preventDefault(); clickOnMenuVolverMobile;} );
go_menu_quienesSomos_mobile.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-quienes-somos', true);} );
go_menu_clientesPartners_mobile.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-clientesPartners', true);});
go_menu_contactanos_mobile.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-contactenos', true);});

/** MENU ESCRITORIO */
const header = document.querySelector('header');
const main_container_col = document.querySelector('.main-container-col');
const contenedor_btn_menu_escritorio = document.getElementById('contenedor-btn-menu-escritorio');
const caja_izquierda = document.querySelector('#columna-menu-escritorio #caja-izquierda');
const btn_nav_Productos = document.querySelector('#columna-menu-escritorio #btn-nav-Productos');
const span_titulo_menu = document.getElementById('span-titulo-menu');
const titulo_menu_productos = document.getElementById('titulo-menu-productos');
const btn_menu_volver = document.getElementById('btn-menu-volver');
const nav_izquierdo = document.getElementById('nav-izquierdo');
const nav_derecho = document.getElementById('nav-derecho');
const go_menu_quienesSomos = document.getElementById('go-menu-quienesSomos');
const go_menu_clientesPartners = document.getElementById('go-menu-clientesPartners');
const go_menu_contactanos = document.getElementById('go-menu-contactanos');

function cierraMenuEscritorio() {
    header.classList.remove("col-lg-45");
    header.classList.add("col-lg-1");

    contenedor_btn_menu_escritorio.style.display = "block";
    caja_izquierda.style.display = "none";

    menu_opened = false;
}

function abreMenuEscritorio() {
    header.classList.remove("col-lg-1");
    header.classList.add("col-lg-45");

    contenedor_btn_menu_escritorio.style.display = "none";
    caja_izquierda.style.display = "block";

    menu_opened = true;
}

function clickOnProductos(volver){
    [span_titulo_menu, titulo_menu_productos, btn_menu_volver].forEach((e) => e.style.visibility = volver ? "hidden" :"visible");
    nav_izquierdo.style.left = volver ? "0%" :"-100%"; 
    nav_derecho.style.right = volver ? "-100%" : "0%";
}

window.addEventListener('scroll', () => {if(menu_opened) cierraMenuEscritorio()});

if(main_container_col) main_container_col.addEventListener('click', () => {if(menu_opened) cierraMenuEscritorio()});

contenedor_btn_menu_escritorio.addEventListener('click', () => {
    if(menu_opened){
        cierraMenuEscritorio();
    } else{
        abreMenuEscritorio();
    }
});

btn_nav_Productos.addEventListener('click', (e) => {e.preventDefault(); clickOnProductos(false);});
btn_menu_volver.addEventListener('click', (e) => {e.preventDefault(); clickOnProductos(true);} );
go_menu_quienesSomos.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-quienes-somos', false);});
go_menu_clientesPartners.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-clientesPartners', false);});
go_menu_contactanos.addEventListener('click', (e) => {e.preventDefault(); clickOnSection('#section-contactenos', false);});