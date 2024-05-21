
const dataCliente = document.querySelector('#formdataCliente');

dataCliente.addEventListener('submit', recibeInformacion);

function recibeInformacion(event){
    event.preventDefault();
    const formulario = new FormData(this);
    navigator.clipboard.writeText(`
    Nombre : ${formulario.get('nombresCliente')}
    Cedula : ${formulario.get('documentoIndentidad')};
    Número : ${formulario.get('minCliente')}
    ${formulario.get('answerTipoSimcard') != "" ? formulario.get('answerTipoSimcard'):"" }

    🔒 ¿Cual es el correo que esta asociado a tu cuenta APP ❓   

    ${formulario.get('correoAsociadoApp')}

    🔒 ¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses ❓
    
    ${formulario.get('comboFrecuente')}

    🔒 ¿Número al que más llamas con frecuencia ❓
    
    👉 ${formulario.get('numFrecuente')}`)
    .then(() => {
        // alert('Texto copiado al portapapeles')
        cajaModal();
    })
    .catch(err => {
        alert('Error al copiar al portapapeles:', err)
        console.log( err );
        // console.error('Error al copiar al portapapeles:', err)
    })
}


function cajaModal(){
    const cajaModal = document.querySelector('.cajaModal');
    cajaModal.setAttribute('style', 'display: block');
    const cerrarModal = document.querySelector('.cerrarModal');
    dataCliente.setAttribute('style', 'visibility: hidden');
    cerrarModal.addEventListener('click', function(){
        cajaModal.setAttribute('style','display: none');
        dataCliente.setAttribute('style', 'visibility: visible');
    })
}