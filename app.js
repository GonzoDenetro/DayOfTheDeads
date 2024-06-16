var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Función para incrementar el contador
  function incrementarContador() {
    if (localStorage.getItem('visitas')) {
      localStorage.setItem('visitas', parseInt(localStorage.getItem('visitas')) + 1);
    } else {
      localStorage.setItem('visitas', 1);
    }
    document.getElementById('contador-visitas').textContent = localStorage.getItem('visitas');
  }