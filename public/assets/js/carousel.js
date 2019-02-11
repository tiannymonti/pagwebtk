$(document).ready(() => {
    const carousel_quienesSomos = $('#quienes-somos-carousel');
    const btn_next_quienes_somos = $('#btn-next-quienes-somos');
    const btn_prev_quienes_somos = $('#btn-prev-quienes-somos');

    carousel_quienesSomos.owlCarousel({
        items: 1,
        center: true,
        dots: false,
        loop: true,
        responsiveClass: true
    });

    // Go to the next item
    btn_next_quienes_somos.click(() => {
        carousel_quienesSomos.trigger('next.owl.carousel');
    });
    // Go to the previous item
    btn_prev_quienes_somos.click(() => {
        carousel_quienesSomos.trigger('prev.owl.carousel');
    });
})