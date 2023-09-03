document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del icono de búsqueda y el formulario
    const searchIcon = document.getElementById("search-icon");
    const searchForm = document.getElementById("search-form");
  
    // Agrega un controlador de eventos al hacer clic en el icono de búsqueda
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el formulario se envíe normalmente
      searchForm.submit(); // Envía el formulario
    });
  });
  