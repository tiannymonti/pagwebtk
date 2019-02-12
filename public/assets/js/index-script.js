const btn_cierra_modal = document.querySelector('.btn-cierra-modal');
const modal_respuesta = document.querySelector('.modal-respuesta');
const fila_svg_btn_scroll = document.getElementById('fila-svg-btn-scroll');
const section_quienes_somos = document.getElementById('section-quienes-somos');

const btn_politics = document.getElementById('btn-politics');
const modal_politicas = document.querySelector('.modal-politicas');
const btn_cierra_m_politicas = document.querySelector('.btn-cierra-m-politicas');

const elige_nosotros = document.querySelector('#quienes-somos-desktop #elige-nosotros');
const elige_hardware = document.querySelector('#quienes-somos-desktop #elige-hardware');
const texto_desktop_hardware = document.querySelector('#texto-desktop-hardware');
const elige_aplicaciones = document.querySelector('#quienes-somos-desktop #elige-aplicaciones');
const texto_desktop_aplicaciones = document.querySelector('#texto-desktop-aplicaciones');
const texto_desktop_nosotros = document.querySelector('#texto-desktop-nosotros');

const btn_mobile_expandPartners = document.querySelector('#btn-mobile-expandPartners');
const clientesPartners_vertical = document.querySelector('#clientesPartners-vertical');
const solo_partners = document.querySelector('#solo-partners');
const btn_expandPartners = document.querySelector('#btn-expandPartners');
const clientesPartners_horizontal = document.querySelector('#clientesPartners-horizontal');
const ventana_transparente_partners = document.querySelector('#contenedor-svg-partners .ventana-transparente-partners');

const btn_mobile_expandClientes = document.querySelector('#btn-mobile-expandClientes');
const btn_expandClientes = document.querySelector('#btn-expandClientes');
const solo_clientes = document.querySelector('#solo-clientes');
const ventana_transparente_clientesMobile = document.querySelector('#contenedor-svg-clientes .ventana-transparente-clientesMobile');
const ventana_transparente_clientes = document.querySelector('#contenedor-svg-clientes .ventana-transparente-clientes');

const carousel_quienesSomos = document.querySelector('#quienes-somos-carousel');
const btn_next_quienes_somos = document.querySelector('#btn-next-quienes-somos');
const btn_prev_quienes_somos = document.querySelector('#btn-prev-quienes-somos');

const empresa = document.querySelector("#empresa");
const nombre = document.querySelector("#nombre");
const celular = document.querySelector("#celular");
const email = document.querySelector("#email");
const comentarios = document.querySelector("#comentarios");
const enviar = document.querySelector("#enviar");
const tituloH_modal = document.querySelector(".modal-respuesta #tituloH-modal");
const parrafo_modal = document.querySelector(".modal-respuesta #parrafo-modal");

function eligeElement(element){
    const eligeElements = [elige_nosotros, elige_hardware, elige_aplicaciones];
    const textElement = [texto_desktop_nosotros, texto_desktop_hardware, texto_desktop_aplicaciones];

    eligeElements.forEach((el, idx) => {
        if(el === element){
            element.classList.add("activo");
            textElement[idx].classList.add("qsdt-visible");
            textElement[idx].classList.remove("qsdt-oculto");
        } else {
            if(el.classList.contains("activo")){
                el.classList.remove("activo");
                textElement[idx].classList.remove("qsdt-visible");
                textElement[idx].classList.add("qsdt-oculto");
            }
        }
    });
    
}

function expandCP(mobile, cp){
    if(mobile){
        clientesPartners_vertical.style.opacity = "0";
    } else {
        clientesPartners_horizontal.style.opacity = "0";
    }

    if(cp === "partners"){
        solo_partners.style.right = "0%";
    } else if(cp === "clientes"){
        solo_clientes.style.left = "0";
    }
}

function ventanaTransparente(mobile){
    solo_clientes.style.left = "100%";

    if(mobile){
        clientesPartners_vertical.style.opacity = "1";
    } else {
        clientesPartners_horizontal.style.opacity = "1";
    }
}

/*** 
=========================================
    FUNCIONES QUE PERMITEN VALIDAR LOS CAMPOS
=========================================
***/

// Permite ingresar solo letras
function soloLetras(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    } else if (tecla == 9) {
        return true;
    }

    patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;

    te = String.fromCharCode(tecla);
    return patron.test(te);
}

// Permite ingresar solo números
function soloNumeros(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if ((tecla == 8) || (tecla == 9)) {
        return true;
    }
    patron = /^[0-9]*$/;

    te = String.fromCharCode(tecla);
    return patron.test(te);
}

// Permite ingresar solo letras y números
function soloLetrasNumeros(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if ((tecla == 8) || (tecla == 9)) {
        return true;
    }
    patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ,. ]+)$/;

    te = String.fromCharCode(tecla);
    return patron.test(te);
}

    // Permite ingresar correos
function soloEmail(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if ((tecla == 8) || (tecla == 9)) {
        return true;
    }
    patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ.@-_]+)$/;

    te = String.fromCharCode(tecla);
    return patron.test(te);
}

// Valida la estructura de un email
function validarEmail(txtMail) {
    patron = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return patron.test(txtMail);
}

// Permite que solo se ingrese un maximo de caracteres en textArea
function validaMaximo(elemento, numMax) {
    var numTxt = elemento.value.length; // Número de caracteres actuales en el textarea
    var numero_maximo = numMax - 1;

    if (numTxt > numero_maximo) {
        return false;
    } else {
        return true;
    }
}

/***
================================================
    EVENTOS SCROLL
================================================
***/

btn_cierra_modal.addEventListener('click', () => {modal_respuesta.style.display = "none";});
fila_svg_btn_scroll.addEventListener('click', (e) => {
    e.preventDefault();
    let offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy/8;
        else { clearInterval(call); y = offset; }
        document.documentElement.scrollTop = y;
    },30);
    offset = section_quienes_somos.offsetTop;
    y = document.documentElement.scrollTop;
}); 

/***
================================================
    EVENTOS PARA MODAL DE POLÍTICAS
================================================
***/

btn_politics.addEventListener('click', (e) => {
    e.preventDefault();
    modal_politicas.style.display = "flex";
});
btn_cierra_m_politicas.addEventListener('click', (e) => {
    e.preventDefault();
    modal_politicas.style.display = "none";
});

/***
================================================
    EVENTOS PARA QUIENES SOMOS ( DESKTOP )
================================================
***/
[elige_nosotros, elige_hardware, elige_aplicaciones].forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        eligeElement(el)});
});

/***
================================================
    EVENTOS PARA CLIENTES Y PARTNERS
================================================
***/
btn_mobile_expandPartners.addEventListener('click', (e) => {
    e.preventDefault();
    expandCP(true, "partners")
});

btn_expandPartners.addEventListener('click', (e)=>{
    e.preventDefault();
    expandCP(false, "partners");
});

ventana_transparente_partners.addEventListener('click', (e) => {
    e.preventDefault();
    solo_partners.style.right = "100%";
    clientesPartners_vertical.style.opacity = "1";
    clientesPartners_horizontal.style.opacity = "1";
});

btn_mobile_expandClientes.addEventListener('click', (e) => {
    e.preventDefault();
    expandCP(true, "clientes");
});

btn_expandClientes.addEventListener('click', (e) => {
    e.preventDefault();
    expandCP(false, "clientes");
});

ventana_transparente_clientesMobile.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTransparente(true);
});

ventana_transparente_clientes.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTransparente(false);
});

/**
 * SLIDER QUIENES SOMOS EN carousel.js
 */

/*** 
=========================================
    SCRIPT PARA LA PARTE DEL "FORMULARIO"
=========================================
***/

[empresa, nombre].forEach(campo => {
    campo.addEventListener('keypress', (e) => {soloLetras(e)});
});

celular.addEventListener('keypress', (e) => {soloNumeros(e)});
email.addEventListener('keypress', (e) => {soloEmail(e)});
comentarios.addEventListener('keypress', (e) => {
    const retorno = validaMaximo(comentarios, 500) ? soloLetrasNumeros(e) : true;
    return retorno;
});

//Envio de formulario
enviar.addEventListener('click', (e) => {
    console.log('into enviar');
    e.preventDefault();
    let dataEnviar = [
        empresa,
        nombre,
        celular,
        email,
        comentarios
    ];
    let bandera = true; 

    dataEnviar.forEach(de => {
        if(de.value === ""){
            de.focus();
            let n = new Noty({
                type: 'error',
                layout: 'topRight',
                text: `${de.name.replace(/^\w/, c => c.toUpperCase())}: Campo es obligatorio`,
                theme: 'semanticui'
            }).show();
            n.show();
            bandera = false;
        }
    }); 

    if (!validarEmail(dataEnviar[3].value)) {
        dataEnviar[3].focus();
        let n = new Noty({
            type: 'error',
            layout: 'topRight',
            text: `Ingresa un email valido`,
            theme: 'semanticui'
        }).show();
        n.show();
        bandera = false;
    }

    if(bandera) {
        let textoEnviar = {
            empresa: empresa.value,
            nombre: nombre.value,
            celular: celular.value,
            email: email.value,
            comentarios: comentarios.value
        };

        let tituloRta = "";
        let textoRta = "";
        let url = '/sendmail';

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            let resp = JSON.parse(xhr.responseText);            
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table('normal', resp);
                tituloRta = "¡ENHORABUENA!.";
                textoRta = "Pronto nos comunicaremos contigo.";
            } else {
                console.error('error', resp);
                tituloRta = "¡UPS...!";
                textoRta = "Ha surgido un error, estamos trabando en ello.";
            }

            modal_respuesta.style.display = 'flex';
            tituloH_modal.textContent =  tituloRta;
            parrafo_modal.textContent = textoRta;

            dataEnviar.forEach(de => {
                de.value = "";
            });
        }
        xhr.send(JSON.stringify(textoEnviar));
    }
});
