
// Recuperacion de la referencia de los controles de formulario
let inV1 = document.getElementById('v1');
let inV2 = document.getElementById('v2');
let inBtn = document.getElementById('btn');
let pResult = document.querySelector('p.text');
let form = document.getElementsByTagName('form')[0];

// Asignacion de evento al formulario
form.addEventListener('submit', function(e){
  e.preventDefault();

  let v1 = parseInt( inV1.value );
  let v2 = parseInt( inV2.value );
 
  let suma = v1 + v2;
  let resta = v1 - v2;
  let multiplicacion = v1 * v2;
  let division = v1/v2;

  pResult.innerText = 'Suma: ' + suma + '\nResta: ' + resta + '\nMultiplicacion: ' + multiplicacion + '\nDivision:' + division;

});


// function sumar() {
//     var v1 = parseFloat(document.getElementById('v1').value);
//     var v2 = parseFloat(document.getElementById('v2').value);

//     if (!isNaN(v1) && !isNaN(v2)) {
//         var resultado = v1 + v2;
//         document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
//     } else {
//         alert('Ingresa números válidos');
//     }
// }