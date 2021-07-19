const cipher = {
  // ...
  encode(offset, txtUno)  {
  
    let mensajeCifrado='';
    let recorridoCadena= '';
    
  for (let i = 0; i < txtUno.length; i += 1) {     
      let txtDos=txtUno.charCodeAt(i);
  
        if(txtDos >= 65 && txtDos <= 90){
          recorridoCadena = (txtDos - 65 + parseInt(offset)) % 26 + 65;
        
          }else if (txtDos >= 97 && txtDos <= 122) {
            recorridoCadena = (txtDos - 97 + parseInt(offset)) % 26 + 97;        
          
            }else if(txtDos === 32){
              recorridoCadena = 32;
      }
      mensajeCifrado += String.fromCharCode(recorridoCadena);
    } 

    if( typeof txtUno!= 'string'){
      throw TypeError('X');
    }
        return mensajeCifrado;
    },
  
  decode(offset, txtUno) {
  
    let mensajeCifrado ='';
    let recorridoCadena= '';
      
    for (let i = 0; i < txtUno.length; i += 1) {
      let txtDos = txtUno.charCodeAt(i);
  
      if (txtDos>=65 && txtDos<=90) {
          recorridoCadena = (txtDos+65 - parseInt(offset))%26 + 65
        
      } else if (txtDos >= 97 && txtDos <= 122) {
        recorridoCadena = (txtDos+97 - parseInt(offset))%26 + 97;        
      
        }/*else if (txtDos === 65) {
          recorridoCadena = 90;
        }*/
          else{
          (txtDos === 32);
          recorridoCadena = 32;
        }
      
    mensajeCifrado +=String.fromCharCode(recorridoCadena);
    }
      if( typeof txtUno!= 'string'){
        throw TypeError('X');
      }
    return mensajeCifrado;
  }

};

export default cipher;
