
let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;

//cambiar texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//verificar el numero de usuario 
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //si acierta el numero
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos ===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    //si no acierta el numero
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero es menor");
        }else{
            asignarTextoElemento("p","el numero es mayor");
        }
        intentos++;
        limpiar();

    }
    return;
}

//funcion de reiniciar juego
function reiniciarJuego(){
    //primero limpiamos caja
    limpiar();

    //Indicar el intervalo de numero, creamos nuevo numero aleatorio y reiniciamos los intentos
    condicionesIniciales();

    //activar disabled a boton de intentar juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


//limpiar caja de texto
function limpiar(){
    document.querySelector('#valorUsuario').value='';
    

}

//funcion de generar numeros random
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", 'Ya se sorteo todos los numeros posibles dentro del rango');
    } else {

         //si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
             //se vuelve a llamar
            return generarNumeroSecreto();


        } else {//si no existe
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}

//funcion para reiniciar condiciones 
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número Secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos =1;

}

condicionesIniciales();

