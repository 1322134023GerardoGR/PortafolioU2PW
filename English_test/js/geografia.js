document.getElementById('resultados').addEventListener('click', function () {
    let resultado=0;
    let inputRespuestas = document.getElementsByClassName('form-select');
    for (let i = 0; i < inputRespuestas.length; i++) {
        let inputRespuesta = inputRespuestas[i];
        let respuesta = parseInt(inputRespuesta.value);
        let img = document.getElementById('validacion-' + (i + 1));
        let h3=document.getElementById('retro'+(i+1));
        if (respuesta === 1) {
            img.src = 'resources/img/correct.png';
            resultado+=1;
            h3.innerText="Felicidades, tu respuesta es correcta";
        } else {
            let correcta=document.getElementById('respuesta'+(i+1)).text;
            img.src = 'resources/img/incorrect.png';
            h3.innerText="La respuesta correcta era: "+correcta;

        }
        inputRespuesta.classList.add("disabled");
        inputRespuesta.disabled = true;
    }
    let btn=document.getElementById('resultados');
    btn.disabled=true;
    btn.classList.add("disabled");
    let p=document.getElementById('result');
    p.innerText = 'Tu puntaje es: ' + resultado+' de '+inputRespuestas.length;



});
document.getElementById('reiniciar').addEventListener('click', function () {
    let inputRespuestas = document.getElementsByClassName('form-select');
    for (let i = 0; i < inputRespuestas.length; i++) {
        let inputRespuesta = inputRespuestas[i];
        inputRespuesta.selectedIndex = 0;
        inputRespuesta.classList.remove("disabled");
        inputRespuesta.disabled = false;
        let img = document.getElementById('validacion-' + (i + 1));
        img.src = '';
        let h3=document.getElementById('retro'+(i+1));
        h3.innerText="";
        let p=document.getElementById('result');
        p.innerText="";
    }
    let btn=document.getElementById('resultados');
    btn.disabled=false;
    btn.classList.remove("disabled");
});