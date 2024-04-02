

const inCliente = document.querySelector("#infoCliente");

inCliente.addEventListener('submit',envioInformacion);

function envioInformacion(event){
    event.preventDefault();
    const form = new FormData(this);

    navigator.clipboard.writeText(
    `Número : ${form.get('minCliente')}
     ¿Has enviado SMS este mes? : ${form.get('answerSms')}
     ¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses? : ${form.get('comboFrecuente')}
     ¿Número al que más llamas con frecuencia? : ${form.get('numerofrecuente')}`)
    .then(() => {
        // alert('Texto copiado al portapapeles')
        cajaModal();
    })
    .catch(err => {
        alert('Error al copiar al portapapeles:', err)
        // console.error('Error al copiar al portapapeles:', err)
    })

}

function cajaModal(){
    const cajaModal = document.querySelector('.cajaModal');
    cajaModal.setAttribute('style', 'display: block');
    const cerrarModal = document.querySelector('.cerrarModal');
    inCliente.setAttribute('style', 'visibility: hidden');
    cerrarModal.addEventListener('click', function(){
        cajaModal.setAttribute('style','display: none');
        inCliente.setAttribute('style', 'visibility: visible');
    })

    // cerrarModal.

}