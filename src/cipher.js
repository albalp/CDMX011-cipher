const cipher = {
  // ...
  encode(txtUno, offset) {
  let mensajeCifrado = '';
  let recorridoCadena = '';
  let alert = "";
  
  //const mensaje ="Carácter inválido";
  if (offset == 0) {
    alert("Ingresa un desplazamiento");
  }
 if(typeof txtUno === "number"){
    throw new TypeError ('No es un número es una cadena');
  }
                       
  for (let i = 0; i < txtUno.length; i += 1) {
    let txtDos = txtUno.charCodeAt(i);
    if (txtDos >= 65 && txtDos <= 90){
      recorridoCadena = (((txtDos - 65) + parseInt(offset)) % 26) + 65;
    }else if (txtDos >= 97 && txtDos <= 122) {
      recorridoCadena = (((txtDos - 97) + parseInt(offset)) % 26) + 97;

    }/*else if (txtDos == 44){
      //recorridoCadena = 44;
    //}*/
    else {
      txtDos = 32;
      recorridoCadena = 32;
    }
    mensajeCifrado += String.fromCharCode(recorridoCadena);
  }
console.log(mensajeCifrado);
  return mensajeCifrado;    
},

decode(txtUno, offset) {
  let mensajeCifrado = '';
  let recorridoCadena = '';
  let alert = "";

  //const mensaje ="Carácter inválido";
  if (offset == 0) {
    alert("Ingresa un desplazamiento");
  }
  
  for (let i = 0; i < txtUno.length; i += 1) {
    let txtDos = txtUno.charCodeAt(i);
    if (txtDos === 65) {
      recorridoCadena = 90;
    }
    else if (txtDos >= 65 && txtDos <= 90){
      recorridoCadena = (((txtDos - 65) - parseInt(offset)) % 26) + 65;
    }
    else if (txtDos === 97) {
      recorridoCadena = 122;
    }
    else if (txtDos >= 97 && txtDos <= 122) {
      recorridoCadena = (((txtDos - 97) - parseInt(offset)) % 26) + 97;
    
    } /*else if (txtDos === 164) {
      //recorridoCadena = 164;
    //}
    else if (txtDos == 44){
      recorridoCadena = 44;
    }*/
    else {
      txtDos = 32;
      recorridoCadena = 32;
    }
    mensajeCifrado += String.fromCharCode(recorridoCadena);  
  }
   if(typeof txtUno === "number"){
    throw TypeError ('Tas mal pues, es cadena!');
  }
  
  return mensajeCifrado;
}
  
};

export default cipher;
