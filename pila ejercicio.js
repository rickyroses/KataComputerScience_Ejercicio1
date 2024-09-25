
/* 
Ejercicio 1: 
Hacer una función que reciba como parámetros una pila, y un número. 
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].
*/ 

function obtenerElementos(pila, cantidad) {
    const elementosObtenidos = [];

    // Validamos que la cantidad sea menor o igual al tamaño de la pila
    if (cantidad > pila.length) {
        console.error("La cantidad solicitada es mayor que el tamaño de la pila.");
      return elementosObtenidos; // Retornamos un arreglo vacío en caso de error
    }

    // Extraemos los elementos de la pila
    for (let i = 0; i < cantidad; i++) {
      elementosObtenidos.push(pila.pop()); // pop() extrae y elimina el último elemento de la pila
    }

    return elementosObtenidos.reverse(); // Revertimos el arreglo para mantener el orden original
}

// Ejemplo de uso
const miFuncion = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
const resultado = obtenerElementos(miFuncion, 4);
console.log(resultado); // Salida: ['Manzana', 'Cebolla', 'Apio', 'Naranja'];


/* 
Ejercicio 2:
Escribe una función “reemplazar” que tenga como parámetros una pila de elementos 
de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, 
de forma que si el segundo valor aparece en algún lugar de la pila, 
sea reemplazado por el primero (Solo la primera vez), 
y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] 
*/

function reemplazar(pila, nuevo, viejo) {
    let contador = 0;
    let i = 0;

    while (i < pila.length) {
        if (pila[i] === viejo) {
            contador++;
        if (contador === 2) {
            pila[i] = nuevo;

            // Eliminar el resto de la pila
            pila.splice(i + 1); 
            break;
        }
        }
        i++;
}

    return pila;
}

// Ejemplo de uso
const miPila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
const reemplazado = reemplazar(miPila, 7, 2);
console.log(reemplazado); // Salida: [3, 2, 3, 4, 6, 8, 1, 7]

/* 
Ejercicio 3:
Un conductor maneja de un pueblo origen a un pueblo destino, 
pasando por varios pueblos. Una vez en el pueblo destino, 
el conductor debe regresar a casa por el mismo camino. 
Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen 
*/

function mostrarRecorrido(recorrido) {
    // Mostrar el recorrido de ida
    console.log("Recorrido de ida:");
    for (let i = 0; i < recorrido.length; i++) {
        console.log(`${i + 1}. ${recorrido[i]}`);
    }

    // Mostrar el recorrido de vuelta
    console.log("\nRecorrido de vuelta:");
    for (let i = recorrido.length - 1; i >= 0; i--) {
        console.log(`${recorrido.length - i}. ${recorrido[i]}`);
    }
}

  // Ejemplo de uso
const recorrido = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
mostrarRecorrido(recorrido);


/* 
Ejercicio 4:
Un almacén tiene capacidad para apilar “n” contenedores. 
Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, 
deben retirarse primero los contenedores que están encima de él 
y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. 
*/

function retirarContenedor(pila, id) {
    const pilaTemporal = [];
    let contenedorEncontrado = false;

    // Desapilar contenedores hasta encontrar el deseado
    while (pila.length > 0 && !contenedorEncontrado) {
        const contenedor = pila.pop();
        if (contenedor.id === id) {
            contenedorEncontrado = true;
        } else {
            pilaTemporal.push(contenedor);
        }
    }

    // Si no se encuentra el contenedor, mostrar un mensaje de error
    if (!contenedorEncontrado) {
        console.log("Contenedor no encontrado en la pila.");
        return pila; // Regresar la pila original sin cambios
    }

    // Reapilar los contenedores en la pila original
    while (pilaTemporal.length > 0) {
        pila.push(pilaTemporal.pop());
    }

    console.log(`Contenedor ${id} retirado con éxito.`);
    return pila;
}

// Ejemplo de uso:
const pilaContenedores = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
];

const idContenedorARetirar = 3;

const nuevaPila = retirarContenedor(pilaContenedores, idContenedorARetirar);
console.log(nuevaPila);