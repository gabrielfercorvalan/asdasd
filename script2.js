// Obtener referencia a los checkboxes de la tabla 1
var checkboxesTabla1 = document.querySelectorAll('.tabla:nth-child(1) input[type="checkbox"]');
		
// Obtener referencia a los checkboxes de la tabla 2
var checkboxesTabla2 = document.querySelectorAll('.tabla:nth-child(2) input[type="checkbox"]');

// Obtener referencia a los checkboxes de la tabla 3
var checkboxesTabla3 = document.querySelectorAll('.tabla:nth-child(3) input[type="checkbox"]');

// Obtener referencia al elemento de precio de la tabla 1
var precioElementoTabla1 = document.querySelector('.tabla:nth-child(1) .precio span');

// Obtener referencia al elemento de precio de la tabla 2
var precioElementoTabla2 = document.querySelector('.tabla:nth-child(2) .precio span');

// Obtener referencia al elemento de precio de la tabla 3
var precioElementoTabla3 = document.querySelector('.tabla:nth-child(3) .precio span');

// Obtener el precio original de cada tabla
var precioOriginalTabla1 = parseInt(precioElementoTabla1.innerText);
var precioOriginalTabla2 = parseInt(precioElementoTabla2.innerText);
var precioOriginalTabla3 = parseInt(precioElementoTabla3.innerText);

// Obtener referencia a los elementos de horas de las tablas
var horasElementoTabla1 = document.querySelector('.tabla:nth-child(1) .titulo h2:nth-child(3)');
var horasElementoTabla2 = document.querySelector('.tabla:nth-child(2) .titulo h2:nth-child(3)');
var horasElementoTabla3 = document.querySelector('.tabla:nth-child(3) .titulo h2:nth-child(3)');

// Obtener las horas originales de cada tabla
var horasOriginalTabla1 = horasElementoTabla1.innerText;
var horasOriginalTabla2 = horasElementoTabla2.innerText;
var horasOriginalTabla3 = horasElementoTabla3.innerText;

// Función para calcular las nuevas horas y el nuevo precio
function calcularNuevasHorasYPrecio(checkboxes, horasElemento, horasOriginales, precioElemento, precioOriginal) {
  var nuevasHoras = 0;
  var nuevoPrecio = precioOriginal;
  var hayCasillasSeleccionadas = false;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      nuevasHoras += parseFloat(checkbox.getAttribute('data-horas'));
      nuevoPrecio += parseFloat(checkbox.value);
      hayCasillasSeleccionadas = true;
    }
  });

  horasElemento.innerText = hayCasillasSeleccionadas ? horasOriginales.replace(/\d+-\d+/, nuevasHoras) : horasOriginales;
  precioElemento.innerText = nuevoPrecio.toFixed(2);
}

// Escuchar el evento 'change' de los checkboxes de la tabla 1
checkboxesTabla1.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    calcularNuevasHorasYPrecio(
      checkboxesTabla1,
      horasElementoTabla1,
      horasOriginalTabla1,
      precioElementoTabla1,
      precioOriginalTabla1
    );
  });
});

// Escuchar el evento 'change' de los checkboxes de la tabla 2
checkboxesTabla2.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    calcularNuevasHorasYPrecio(
      checkboxesTabla2,
      horasElementoTabla2,
      horasOriginalTabla2,
      precioElementoTabla2,
      precioOriginalTabla2
    );
  });
});

// Escuchar el evento 'change' de los checkboxes de la tabla 3
checkboxesTabla3.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    calcularNuevasHorasYPrecio(
      checkboxesTabla3,
      horasElementoTabla3,
      horasOriginalTabla3,
      precioElementoTabla3,
      precioOriginalTabla3
    );
  });
});