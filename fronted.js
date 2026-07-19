document.addEventListener('click', function (e) {
    if (e.target.matches('[data-nav]')) {
      const seccion = e.target.getAttribute('data-nav');
      mostrar(seccion);
    }
  });
  