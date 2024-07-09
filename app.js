let numeroSecreto = 0
let intentos = 0;
let listavalidacionNumeros = []


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el Numero Secreto!!!! en ${intentos} ${(intentos == 1 ? 'vez' : 'veces' )}`)
        queueMicrotask
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    } 
    else{
        if(numeroSecreto < numeroDeUsuario){
            asignarTextoElemento('p','Sigue Intentando!!!!! el numero es menor')
        }
        else{
            asignarTextoElemento('p','Sigue Intentando!!!!! el numero es mayor')
        }
        limpiarCaja()
    }
    intentos ++;
    return;
}

reniciarJuego = () =>{
    mensajesIniciales()
    limpiarCaja()
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10)+1;
    if(listavalidacionNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto()
    }else{
        listavalidacionNumeros.push(numeroGenerado)
        return numeroGenerado
    }


}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!')
    asignarTextoElemento('p',`Indica un número del 1 al 10`)
    numeroSecreto = generarNumeroSecreto()
    console.log(numeroSecreto);
    intentos = 1

}


limpiarCaja=()=>{
    document.querySelector('#valorUsuario').value = ''
}

mensajesIniciales()
