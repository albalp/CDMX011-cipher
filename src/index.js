import cipher from './cipher.js';

console.log(cipher);

const btnCifrar = document.getElementById('botonCifrar');
btnCifrar.addEventListener('click', () => {
  const txtUno = document.getElementById('caja').value;
  const offset = document.getElementById('offset').value;
  const mensajeCifrado = cipher.encode(txtUno, offset);
  document.getElementById('cajaDos').value = mensajeCifrado;
  document.getElementById('volverInicio').style.display="block";
  document.getElementById('otroMensaje').style.display = 'block';
  
});

const btnDescifrar = document.getElementById('botonDescifrar');
btnDescifrar.addEventListener('click', () => {
  const txtUno = document.getElementById('caja').value;
  const offset = document.getElementById('offset').value;
  const mensajeCifrado = cipher.decode(txtUno, offset);
  document.getElementById('cajaDos').value = mensajeCifrado;
 
});


function botonDarkLady() {
  document.getElementById('mensajeDarkLady').style.display = 'block';
  document.getElementById('botonesRaza').style.display = 'none';
  document.getElementById('textArea').style.display = 'block';
  document.getElementById('textAreaDos').style.display = 'block';
}
document.getElementById('darkLady').addEventListener('click', botonDarkLady);
function botonElfa() {
  document.getElementById('mensajeElfa').style.display = 'block';
  document.getElementById('botonesRaza').style.display = 'none';
  document.getElementById('textArea').style.display = 'block';
  document.getElementById('textAreaDos').style.display = 'block';
}
document.getElementById('elfa').addEventListener('click', botonElfa);

function botonMujer() {
  document.getElementById('mensajeMujer').style.display = 'block';
  document.getElementById('botonesRaza').style.display = 'none';
  document.getElementById('textArea').style.display = 'block';
  document.getElementById('textAreaDos').style.display = 'block';
}
document.getElementById('mujer').addEventListener('click', botonMujer);

function botonEnana() {
  document.getElementById('mensajeEnana').style.display = 'block';
  document.getElementById('botonesRaza').style.display = 'none';
  document.getElementById('textArea').style.display = 'block';
  document.getElementById('textAreaDos').style.display = 'block';
}
document.getElementById('enana').addEventListener('click', botonEnana);

function volverInicio(){
  document.getElementById('paginaUno').style.display = 'none';
  document.getElementById('botonesRaza').style.display = 'block';
  document.getElementById('textArea').style.display = 'none';
  document.getElementById('textAreaDos').style.display = 'none';
  document.getElementById('otroMensaje').style.display = 'none';
  document.getElementById('volverInicio').style.display = 'none';
  
}
document.getElementById("volverInicio").addEventListener("click", volverInicio);