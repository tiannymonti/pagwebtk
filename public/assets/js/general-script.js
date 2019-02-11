new WOW().init();

const btn_flotante_home = document.querySelector('.btn-flotante-home');
const btn_volver_product_idx = document.querySelector('.btn-volver-product-index');

function scrollToTop (scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

function redirectToHome() {
    if(location.pathname === '/'){
        scrollToTop(1800);  
    } else {
        window.location.href = `/#section-conocimiento`; 
    }
}

if(btn_flotante_home) btn_flotante_home.addEventListener('click', redirectToHome)

if(btn_volver_product_idx) btn_volver_product_idx.addEventListener('click', redirectToHome);
