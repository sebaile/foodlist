// js/app.js

document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");
  
    function mostrar(seccion) {
      fetch(`views/${seccion}.html`)
        .then(res => res.text())
        .then(html => contenido.innerHTML = html)
        .catch(err => contenido.innerHTML = "<p>Error al cargar contenido.</p>");
    }
  
    // Cargar vista inicial
    mostrar("inicio");
  
    // Manejo de clics en menú
    document.querySelectorAll("nav button").forEach(btn => {
      btn.addEventListener("click", () => {
        const seccion = btn.getAttribute("data-nav");
        mostrar(seccion);
      });
    });
  
    // Delegador para botones internos con data-nav
    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-nav]")) {
        e.preventDefault();
        mostrar(e.target.getAttribute("data-nav"));
      }
    });
  });
  