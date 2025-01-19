const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 5) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 72:
        premio('Premio 1: 2 estrellas');
        break;
      case valor > 72 && valor <= 144:
        premio('Premio 2: 5 Piezas');
        break;
      case valor > 144 && valor <= 216:
        premio('Premio 3: 2 Corazón');
        break;
      case valor > 216 && valor <= 288:
        premio('Premio 4: Handroll Mini');
        break;
      case valor > 288 && valor <= 360:
        premio('Premio 5: Coca Cola de 2L');
        break;
    }
  }, 5000); // Retraso para que termine de girar

}
}