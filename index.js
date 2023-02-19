function validarNombre(){

    let valor = document.getElementById("nombre").value; 

    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ){
        return false;
    } else {
        return true;
    };
}

function validateEmail(email){
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(email)) {
        return true;
    } else {
        return false;
    };
}


function comprobarClave(clave) {
    return clave.length <= 8 && clave.length >= 5;
}

function validacion(){
    const nombreCompleto = document.getElementById("nombre");
    const correoElec = document.getElementById("email");
    const clave1 = document.getElementById("clave1");
    const clave2 = document.getElementById("clave2");
    const errorNombre = document.getElementById ("nombre-error");
    const errorEmail = document.getElementById ("email-error");
    const errorContra1 = document.getElementById ("clave1-error");
    const errorContra2 = document.getElementById ("clave2-error");

    let existeError = false;

    if (!validarNombre()) {
        showError(nombreCompleto, errorNombre, "Rellene este campo");
        existeError = true;
    } else {
        hideError(nombreCompleto, errorNombre);
    } 
    
    if (correoElec.value.length === 0){
        showError(correoElec, errorEmail, "Rellene este campo");
            existeError = true;
    } else if
        (!validateEmail(correoElec.value)){
            showError(correoElec, errorEmail, "Email inválido");
            existeError = true;
    } else {
        hideError(correoElec, errorEmail);
    }

    if (clave1.value.length ===0){
        showError(clave1, errorContra1, "Rellene este campo");
        existeError = true;
    } else if (!comprobarClave(clave1.value)){
        showError(clave1, errorContra1, "La contraseña debe tener mín 5 caracteres y max 8");
        existeError = true;
    }
    if (clave2.value.length === 0 ) {
        showError(clave2, errorContra2, "Rellene este campo");
        existeError = true;
    } else if (!comprobarClave(clave2.value)) {
        showError(clave2, errorContra2, "La contraseña debe tener mín 5 caracteres y max 8");
        existeError = true;
    }
    else if ( clave1.value !== clave2.value) {
        showError(clave2, errorContra2, "Las contraseñas no coinciden");
        existeError = true;
    }
    else {
        hideError(clave1, errorContra1);
        hideError(clave2, errorContra2);
    }
    if (existeError) {return false;} else {alert("El formulario ha sido enviado"); return true;}
}


function showError(divInput, divError, texto){
    divInput.style.border = "3px solid red";
    divError.innerHTML = `<img class="error-icon" id="fallo" src=".//imagenes/error-icon.svg"><p>`+texto+`</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = "3px solid green";
    divError.innerHTML = `<img class="ok-icon" id="ok" src=".//imagenes/success-icon.svg">`;
}

/*function emailInvalido (divError) {
    divError.innerHTML = `<p>Email inválido</p>`;
};

function probClave (divError){
    divError.innerHTML = `<p id="dos">La contraseña debe tener mín 5 caracteres y max 8</p>`;

};

function probClave2 (divError){
    divError.innerHTML = `<p>Las contraseñas no coinciden</p>`;

}*/