function mostrarInformacion(boton) {
    const informacion = document.getElementById("informacion");
    switch (boton) {
      case "boton1":
        informacion.innerHTML = "Durante mi carrera profesional, adquirí habilidades en liderazgo y trabajo en equipo, las cuales aplico en proyectos exitosos en colaboración con colegas y clientes. Además, tengo una amplia experiencia en la gestión de proyectos y en la toma de decisiones estratégicas";
        break;
      case "boton2":
        informacion.innerHTML = "Completé una formación sólida en mi área de estudio, incluyendo cursos avanzados en tecnologías y metodologías actuales. Además, realizo cotinuamente programas de capacitación y desarrollo profesional para seguir mejorando mis habilidades y conocimientos en mi campo.";
        break;
      default:
        informacion.innerHTML = "";
    }
  }
  
  const boton1 = document.getElementById("boton1");
  boton1.addEventListener("click", function() {
    mostrarInformacion("boton1");
  });
  
  const boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", function() {
    mostrarInformacion("boton2");
  });
