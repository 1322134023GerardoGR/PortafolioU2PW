document.getElementById('resultados').addEventListener('click', function () {
    let resultadoPreguntas = []
    let resultado = 0;
    let inputRespuestas = document.querySelectorAll('input[type="' + 'radio' + '"]:checked');
    for (let i = 0; i < inputRespuestas.length; i++) {
        let inputRespuesta = inputRespuestas[i];
        let respuesta = parseInt(inputRespuesta.value);
        let img = document.getElementById('validacion-' + (i + 1));
        if (respuesta === 1) {
            img.src = 'resources/img/correct.png';
            resultado+=1/inputRespuestas.length*10;
        } else {
            img.src = 'resources/img/incorrect.png';
        }
    }
    let imagenes = document.querySelectorAll(".invisible");

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.remove("invisible");
    }
    let radios = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
    }
    document.getElementById('resultados').disabled = true;
    let p=document.getElementById('result');
    p.innerText = 'Your score is: ' + resultado+' of '+inputRespuestas.length;



});
document.getElementById('reiniciar').addEventListener('click', function () {
    let inputRespuestas = document.querySelectorAll('input[type="' + 'radio' + '"]:checked');
    for (let i = 0; i < inputRespuestas.length; i++) {
        let inputRespuesta = inputRespuestas[i];
        inputRespuesta.checked = false;
    }
    let imagenes = document.getElementsByTagName('img');

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src="";
    }
    let radios = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
    }
    document.getElementById('resultados').disabled = false;
});