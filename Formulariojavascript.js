<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario Usuario</title>
  <style>
    /* 
      Estilos base de la página:
      - Se define una tipografía estándar para todo el documento.
      - Se establece un color de fondo suave para mejorar la legibilidad.
      - Se usa Flexbox para centrar el contenedor principal tanto vertical como horizontalmente.
      - Se fuerza que el alto de la ventana ocupe todo el viewport para asegurar el centrado vertical.
      - Se quitan márgenes por defecto del body para evitar desplazamientos no deseados.
    */
    body {
      font-family: Arial, sans-serif;          /* Fuente simple y ampliamente disponible */
      background: #f4f6f9;                     /* Color de fondo claro para contraste con el formulario */
      display: flex;                           /* Activa Flexbox para centrar contenido */
      justify-content: center;                 /* Centra horizontalmente el contenedor */
      align-items: center;                     /* Centra verticalmente el contenedor */
      height: 100vh;                           /* Ocupa el alto total de la ventana visible */
      margin: 0;                               /* Elimina márgenes por defecto del navegador */
    }

    /* 
      Contenedor del formulario:
      - Fondo blanco para contraste con el body.
      - Relleno interno para que los elementos no peguen a los bordes.
      - Bordes redondeados para una apariencia moderna.
      - Sombra sutil para separar el contenedor del fondo.
      - Ancho fijo razonable para una buena lectura en escritorio.
      - En móviles se ajustará mediante media query.
    */
    .contenedor {
      background: white;                       /* Fondo blanco para resaltar el formulario */
      padding: 20px 30px;                      /* Espacio interno alrededor de los campos */
      border-radius: 10px;                     /* Esquinas redondeadas */
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);  /* Sombra suave para profundidad */
      width: 400px;                            /* Ancho fijo cómodo en pantallas medianas */
      box-sizing: border-box;                  /* Incluye padding en el cálculo del ancho total */
    }

    /* 
      Título:
      - Centrado para mantener jerarquía visual.
      - Separación inferior para no pegarse al primer campo.
      - Color gris oscuro para buen contraste sin ser negro puro.
    */
    h2 {
      text-align: center;                      /* Alineación centrada del título */
      margin-bottom: 15px;                     /* Espacio inferior para separarlo del formulario */
      color: #333;                             /* Color de texto legible y sobrio */
      font-weight: 600;                        /* Peso seminegrita para destacar */
    }

    /* 
      Etiquetas de los campos:
      - Se muestran como bloque para ocupar toda la línea.
      - Margen superior para separar un campo del anterior.
      - Negrita ligera para mejorar la legibilidad de los nombres de campo.
    */
    label {
      display: block;                          /* Ocupa toda la línea para alinear el input debajo */
      margin-top: 10px;                        /* Separación con el elemento anterior */
      font-weight: bold;                       /* Resalta el nombre del campo */
      color: #444;                             /* Color ligeramente más claro que el del título */
    }

    /* 
      Campos de entrada y selectores:
      - Relleno interno suficiente para que sean cómodos de pulsar.
      - Ancho total del contenedor para alinear visualmente todos los campos.
      - Margen superior pequeño para separarse de la etiqueta.
      - Borde suave y esquinas redondeadas para aspecto moderno.
      - Se define box-sizing para evitar que el padding rompa el ancho.
    */
    input, select {
      padding: 10px;                           /* Espacio interno para mejorar la interacción */
      width: 100%;                             /* Ocupa el ancho disponible del contenedor */
      margin-top: 5px;                         /* Separación respecto a la etiqueta */
      border: 1px solid #ccc;                  /* Borde gris claro y discreto */
      border-radius: 5px;                      /* Esquinas redondeadas para uniformidad */
      box-sizing: border-box;                  /* El padding no incrementa el ancho total */
      outline: none;                           /* Quita borde azul por defecto al enfocar (se reemplaza abajo) */
      transition: border-color .2s ease;       /* Transición suave al cambiar el color del borde */
    }

    /* 
      Estado de foco de inputs y select:
      - Cambia el color del borde al enfocar para dar retroalimentación visual.
    */
    input:focus, select:focus {
      border-color: #007BFF;                   /* Borde azul al enfocar para indicar foco */
    }

    /* 
      Botón de acción:
      - Ancho completo para que sea fácil de localizar y pulsar.
      - Relleno amplio para mejor accesibilidad.
      - Colores con suficiente contraste para leer el texto.
      - Cursor tipo mano para indicar accionabilidad.
      - Transición para suavizar el cambio de color en el hover.
    */
    button {
      margin-top: 15px;                        /* Separación con el último campo del formulario */
      width: 100%;                             /* Ocupa el ancho total del contenedor */
      padding: 12px;                           /* Tamaño de área clicable adecuado */
      background: #007BFF;                     /* Color principal del botón */
      color: white;                            /* Texto en color blanco para contraste */
      border: none;                            /* Se elimina el borde por defecto */
      border-radius: 5px;                      /* Esquinas redondeadas para consistencia visual */
      cursor: pointer;                         /* Indica que es un elemento interactivo */
      font-size: 16px;                         /* Tamaño de fuente legible */
      transition: background .2s ease;         /* Transición suave de color al pasar el cursor */
    }

    /* 
      Estado hover del botón:
      - Oscurece ligeramente el fondo para dar respuesta visual al usuario.
    */
    button:hover {
      background: #0056b3;                     /* Tono más oscuro al pasar el cursor */
    }

    /* 
      Caja de resultados:
      - Margen superior para separarla del botón.
      - Fondo gris claro para diferenciar el bloque de salida.
      - Relleno interno para legibilidad del contenido.
      - Bordes redondeados para mantener coherencia con el resto de elementos.
    */
    .resultado {
      margin-top: 15px;                        /* Separación respecto al botón */
      padding: 10px;                           /* Espacio interno para que el texto respire */
      border-radius: 5px;                      /* Esquinas redondeadas coherentes con el diseño */
      background: #f1f1f1;                     /* Fondo claro que contrasta con el contenedor blanco */
      color: #222;                              /* Color de texto ligeramente más oscuro para lectura */
    }

    /* 
      Regla de diseño responsivo:
      - En pantallas pequeñas, el contenedor ocupa casi todo el ancho con un límite máximo.
      - Se añade un margen horizontal interno para que no pegue a los bordes del viewport.
    */
    @media (max-width: 480px) {
      .contenedor {
        width: 100%;                           /* Aprovecha todo el ancho disponible en móvil */
        max-width: 360px;                      /* Limita el ancho para mantener legibilidad */
        margin: 0 12px;                        /* Aporta separación lateral en pantallas muy estrechas */
      }
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <h2>Registro de Usuario</h2>
    <form id="formulario" novalidate>
      <label>Nombre:</label>
      <input type="text" id="nombre" required>

      <label>Apellido:</label>
      <input type="text" id="apellido" required>

      <label>Fecha de Nacimiento:</label>
      <input type="date" id="fechaNacimiento" required>

      <label>Sexo:</label>
      <select id="sexo">
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <label>Universidad:</label>
      <select id="universidad" required>
        <option value="Nacional">Universidad Nacional (Pública)</option>
        <option value="Antioquia">Universidad de Antioquia (Pública)</option>
        <option value="Javeriana">Pontificia Universidad Javeriana (Privada)</option>
        <option value="LosAndes">Universidad de los Andes (Privada)</option>
      </select>

      <label>Número de Teléfono:</label>
      <input type="tel" id="telefono" required>

      <button type="button" onclick="procesar()">Procesar Datos</button>
    </form>

    <div id="resultado" class="resultado" aria-live="polite"></div>
  </div>

  <script>
    class Usuario {
      constructor(nombre, apellido, fechaNacimiento, sexo, universidad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.universidad = universidad;
        this.telefono = telefono;
      }

      calcularEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
          edad--;
        }
        return edad;
      }

      esMayorEdad() {
        return this.calcularEdad() >= 18;
      }

      tipoUniversidad() {
        const universidades = {
          "Nacional": "Pública",
          "Antioquia": "Pública",
          "Javeriana": "Privada",
          "LosAndes": "Privada"
        };
        return universidades[this.universidad] || "Desconocida";
      }
    }

    function procesar() {
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      const sexo = document.getElementById("sexo").value;
      const universidad = document.getElementById("universidad").value;
      const telefono = document.getElementById("telefono").value.trim();

      const usuario = new Usuario(nombre, apellido, fechaNacimiento, sexo, universidad, telefono);

      document.getElementById("resultado").innerHTML = `
        <p><b>Nombre:</b> ${usuario.nombre} ${usuario.apellido}</p>
        <p><b>Edad:</b> ${usuario.calcularEdad()} años</p>
        <p><b>Mayor de edad:</b> ${usuario.esMayorEdad() ? "Sí" : "No"}</p>
        <p><b>Sexo:</b> ${usuario.sexo}</p>
        <p><b>Universidad:</b> ${usuario.universidad} (${usuario.tipoUniversidad()})</p>
        <p><b>Teléfono:</b> ${usuario.telefono}</p>
      `;
    }
  </script>
</body>
</html>
