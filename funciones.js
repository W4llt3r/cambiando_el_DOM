//EJERCICIO 1: CAMBIO DE COLORES EN PARRAFOS. 
/*
document.querySelector('#colores').addEventListener('click',cambiarColores);

function cambiarColores(){
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p=> p.style.color = "black");
    let contador = 0;
    let color; 
    while(contador<parrafos.length){
        if(contador %2 === 0){
            color = "red";
                            } else {
                                    color = "blue";
                                    }
        parrafos[contador].style.color = color;
        contador ++;
    }
}
*/

//Mejorado por el CHAT GPT
document.querySelector('#colores').addEventListener('click',cambiarColores);

let coloresAplicados = false; // Variable de estado, Bandera

function cambiarColores() {
const parrafos = document.querySelectorAll('p');
            if (!coloresAplicados) {
            // Aplica colores rojo y azul a los párrafos
            parrafos.forEach((parrafo, index) => {
                if ((index + 1) % 2 == 0) {
                    parrafo.style.color = "red";
                    } else {
                    parrafo.style.color = "blue";
                    }
                });
                coloresAplicados = true; // Cambia el estado a true, Cambia la Bandera
                } else {
                // Vuelve todos los párrafos a color negro
                parrafos.forEach((parrafo) => {
                parrafo.style.color = "black";
                });
                coloresAplicados = false; // Cambia el estado a false
            }
        }

//EJERCICIO 2: Agregar elementos a la lista
document.querySelector('#btn-agregar').addEventListener('click', agregar);

function agregar(){
    let lista = document.querySelector('#lista');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.classList.add('elemento');
    nuevoElemento.innerHTML = document.querySelector('#agregar').value;
    nuevoElemento.innerHTML += '<span class="quitar" onclick="borrar(this.parentNode)">🗑️</span>';
    lista.appendChild(nuevoElemento);
    verificarCantidad();
    document.querySelector('#agregar').value ='';
    document.querySelector('#agregar').focus();
}

function verificarCantidad(){
                            let cantidad = document.querySelectorAll('#lista .elemento').length;
                            document.querySelector('#cantidad').innerHTML = cantidad;
                            }

//EJERCICIO 3: Borrar un elemento de la lista
function borrar(elemento){
                        elemento.remove();
                        verificarCantidad();
                        }

document.addEventListener('DOMContentLoaded', () => {
                            let items = document.querySelectorAll('#lista li');
                            for(let i = 0; i < items.length; i++ ){
                                                                items[i].innerHTML += '<span class ="quitar" onclick ="borrar(this.parentNode)">🗑️</span>'
                                                                }
                                                    }
                            );
//EJERCICIO 4: Un mecanismo para que la imagen disminuya su tamaño,y otro mecanismo para que vuelva al tamaño anterior.

document.querySelector('#dimensiones-imagen').addEventListener('click', () => {
    let figura = document.querySelector('figure');
    let clases = figura.classList;
    // Si ya ocupaba 8 columnas, le quitamos las clases. Si no, se las agregamos
    clases.toggle("col-md-8");
    clases.toggle("offset-md-2");
    // Si ya ocupaba 4 columnas, le quitamos las clases. Si no, se las agregamos
    clases.toggle("col-md-4");
    clases.toggle("offset-md-4");
});

/*EJERCICIOS 5 y 6
    5. Al hacer clic en la imagen, esta debe ocultarse.
    6. Si la imagen está oculta, debe aparecer un botón que permita que se vuelva a ver.
*/
document.querySelector('figure img').addEventListener('click', ocultar_imagen);

function ocultar_imagen() {
    // Agregamos a la imagen la clase de bootstrap 'd-none', para ocultar:
    document.querySelector('figure img').classList.add('d-none');
    // Creamos el botón y lo agregamos dentro del <figure>
    let boton = document.createElement('button');
    boton.id = "boton-mostrar-imagen";
    boton.classList.add("btn");
    boton.classList.add("btn-success");
    boton.innerHTML = "Mostrar imagen";
    document.querySelector('figure').appendChild(boton);
    // Añadimos el evento para que el botón vuelva a mostrar la imagen:
    boton.addEventListener('click', mostrar_imagen);
}

function mostrar_imagen() {
    // Eliminamos el botón...
    document.querySelector('figure button').remove();
    // ... y volvemos a mostrar la imagen, eliminando la clase 'd-none'.
    document.querySelector('figure img').classList.remove('d-none');
}

/*
EJERCICIO 7
Agregar un mecanismo para eliminar todos los elementos de la lista.
*/
document.querySelector('#btn-vaciar').addEventListener('click', () => {
    let lista = document.querySelector('#lista');
    while (lista.firstChild) {
        lista.lastChild.remove();
    }
    verificarCantidad();
});
