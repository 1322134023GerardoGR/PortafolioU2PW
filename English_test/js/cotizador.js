let elementosCheck = document.querySelectorAll('input[name="ing"]');

// Función para actualizar la orden
function actualizarOrden() {
    let listaProducto = document.getElementById("listaValores");
    let total = 80;
    let cadena = "Pizza +$80\n";

    // Contador de checkboxes seleccionados
    let checkboxesSeleccionados = 0;

    // Itera sobre los elementos checkbox
    elementosCheck.forEach(check => {
        if (check.checked) {
            checkboxesSeleccionados++;
            let costo = parseInt(check.value);
            total += costo;
            let producto = document.querySelector('label[for="' + check.id + '"]').textContent;
            cadena += producto + " \n";
        }
    });

    // Verifica que al menos un checkbox esté seleccionado
    if (checkboxesSeleccionados === 0) {
        // Mostrar mensaje de error o realizar alguna acción
        alert("Debes elegir al menos un sabor de ingredientes.");
        return;
    }

    // Continúa con la actualización de la orden
    cadena += "\nTotal: " + total;
    listaProducto.innerText = cadena;
}

// Escucha el evento change en los checkboxes de ingredientes
elementosCheck.forEach(check => {
    check.addEventListener('change', actualizarOrden);
});



document.getElementById("obtenerValores").addEventListener("click", function() {
    let pedidosRadios = document.querySelectorAll('input[type="' + 'radio' + '"]:checked');
    let listaProducto= document.getElementById("listaValores");
    let total=80;
    let cadena="Pizza +$80\n";


    let pedidosSelect = document.getElementsByClassName('form-select');

    for(let i=0;i<pedidosSelect.length;i++){
        let allP=pedidosSelect[i];
        let selectP=allP.options[pedidosSelect[i].selectedIndex];
        let costo = parseInt(selectP.value);
        allP.disabled=true;
        if(costo!==0) {
            total += costo;
            let producto = selectP.textContent;
            cadena += producto + " \n";
        }
    }

    let pedidosCheck = document.getElementsByClassName('form-check-input');
    let pedidosCheckLabel = document.getElementsByClassName('form-check-label');
    for(let i=0;i<pedidosCheck.length;i++){
        let checkP=pedidosCheck[i];
        let label = pedidosCheckLabel[i];
        checkP.disabled=true;
        if(checkP.checked){
            let costo = parseInt(checkP.value);
            total+=costo;
            let producto = label.textContent;
            cadena+=producto+" \n";
        }
    }
    let ingredientesCheckbox = document.querySelectorAll('input[name="ing"]:checked');
    if (ingredientesCheckbox.length === 0) {
        alert("Por favor, selecciona al menos un ingrediente.");
        return; // Detener la ejecución si no hay ingredientes seleccionados
    }


    cadena+="\nSubTotal: "+total;
    let iva=total*0.16;
    cadena+="\nIVA: "+iva;
    cadena+="\nTotal: "+(total+iva);
    listaProducto.innerText=cadena;
});
document.getElementById("ordenar").addEventListener("click", function() {
    let pedidosSelect = document.getElementsByClassName('form-select');

    for(let i=0;i<pedidosSelect.length;i++){
        let allP=pedidosSelect[i];
        allP.disabled=false;
    }
    let pedidosCheck = document.getElementsByClassName('form-check-input');
    let pedidosCheckLabel = document.getElementsByClassName('form-check-label');
    for(let i=0;i<pedidosCheck.length;i++){
        let checkP=pedidosCheck[i];
        checkP.disabled=false;

    }
    let listaProducto= document.getElementById("listaValores");
    listaProducto.innerText="";
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de radio de tamaño
    let tamanioRadios = document.querySelectorAll('input[name="t"]');

    // Añadir un evento de cambio a cada radio de tamaño
    tamanioRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // Obtener el valor del radio seleccionado
            let valorTamanio = document.querySelector('input[name="t"]:checked').value;

            // Obtener los elementos de radio de masa
            let masaRadios = document.querySelectorAll('input[name="m"]');

            // Desactivar los dos últimos radios de masa si el valor del tamaño es 35 o 45
            if (valorTamanio == '55' || valorTamanio == '110') {
                masaRadios[2].disabled = true;
                masaRadios[3].disabled = true;
            } else {
                // Habilitar todos los radios de masa en otros casos
                masaRadios[2].disabled = false;
                masaRadios[3].disabled = false;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de checkbox de ingredientes
    let ingredientesCheckboxes = document.querySelectorAll('input[name="ing"]');

    // Obtener los elementos de radio de tamaño
    let tamanioRadios = document.querySelectorAll('input[name="t"]');

    // Añadir un evento de cambio a cada radio de tamaño
    tamanioRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // Obtener el valor del radio de tamaño seleccionado
            let valorTamanio = document.querySelector('input[name="t"]:checked').value;

            // Iterar sobre cada checkbox de ingredientes
            ingredientesCheckboxes.forEach(function(checkbox) {
                // Obtener el valor del checkbox actual
                let valorIngrediente = checkbox.value;

                // Desactivar checkbox de ingredientes dependiendo del valor del tamaño
                if (valorTamanio == '35' || valorTamanio == '110') {
                    // Desactivar los checkboxes de pollo y 4 quesos
                    if (valorIngrediente == '30' || valorIngrediente == '10') {
                        checkbox.disabled = true;
                    } else {
                        checkbox.disabled = false;
                    }
                } else {
                    // Habilitar todos los checkboxes de ingredientes en otros casos
                    checkbox.disabled = false;
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de checkbox de ingredientes
    let ingredientesCheckboxes = document.querySelectorAll('input[name="ing"]');

    // Añadir un evento de cambio a cada checkbox de ingredientes
    ingredientesCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Obtener todos los checkboxes seleccionados
            let checkboxesSeleccionados = document.querySelectorAll('input[name="ing"]:checked');

            // Desactivar los checkboxes que exceden el límite de 4
            if (checkboxesSeleccionados.length > 4) {
                checkbox.checked = false;
            }
        });
    });
});
