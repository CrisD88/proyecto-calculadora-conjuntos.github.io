function calcularCardinalidades() {
    // Obtener el universo, A, B y C del input
    var universoInput = document.getElementById("universo").value;
    var conjuntoAInput = document.getElementById("conjuntoA").value;
    var conjuntoBInput = document.getElementById("conjuntoB").value;
    var conjuntoCInput = document.getElementById("conjuntoC").value;

    // Convertir los conjuntos en arrays y filtrar elementos vacíos
    var elementosUniverso = universoInput.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    var elementosA = conjuntoAInput.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    var elementosB = conjuntoBInput.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    var elementosC = conjuntoCInput.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    // Calcular las cardinalidades
    var cardinalidadUniverso = elementosUniverso.length;
    var cardinalidadA = elementosA.length;
    var cardinalidadB = elementosB.length;
    var cardinalidadC = elementosC.length;

    // Definición de la cardinalidad
    var definicion = "<p>Definición:</p>\n<p>Cardinalidad: Número de elementos que contiene.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "<br>Cardinalidad del Universo = " + cardinalidadUniverso + "<br>Cardinalidad de A = " + cardinalidadA + "<br>Cardinalidad de B = " + cardinalidadB + "<br>Cardinalidad de C = " + cardinalidadC;
}



function limpiarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "";
}

function verificarSubconjuntos() {
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var universo = document.getElementById("universo").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });
    var elementosUniverso = universo.split(",").map(function(item) {
        return item.trim();
    });

    // Función para verificar si un conjunto es subconjunto de otro
    function esSubconjunto(conjunto, subconjunto) {
        return subconjunto.every(function(item) {
            return conjunto.includes(item);
        });
    }

    // Función para verificar si un conjunto es subconjunto propio de otro
    function esSubconjuntoPropio(conjunto, subconjunto) {
        return esSubconjunto(conjunto, subconjunto) && conjunto.length < subconjunto.length;
    }

    // Verificar subconjuntos
    var resultado = "";

    // Definiciones
    resultado += "<p>Definiciones:</p>";
    resultado += "<p>Subconjunto ⊆: Cada elemento de A está en B.</p>";
    resultado += "<p>Subconjunto propio ⊂: Cada elemento de A está en B, pero B tiene más elementos.</p>";
    resultado += "<p>No es un subconjunto ⊄: A no es un subconjunto de B.</p>";

    if (esSubconjunto(elementosA, elementosB)) {
        resultado += "A ⊆ B. <br>";
    } else if (esSubconjuntoPropio(elementosA, elementosB)) {
        resultado += "A ⊂ B. <br>";
    } else {
        resultado += "A ⊄ B. <br>";
    }

    if (esSubconjunto(elementosB, elementosA)) {
        resultado += "B ⊆ A. <br>";
    } else if (esSubconjuntoPropio(elementosB, elementosA)) {
        resultado += "B ⊂ A. <br>";
    } else {
        resultado += "B ⊄ A. <br>";
    }

    if (esSubconjunto(elementosA, elementosUniverso)) {
        resultado += "A ⊆ U. <br>";
    } else if (esSubconjuntoPropio(elementosA, elementosUniverso)) {
        resultado += "A ⊂ U. <br>";
    } else {
        resultado += "A ⊄ U. <br>";
    }

    if (esSubconjunto(elementosB, elementosUniverso)) {
        resultado += "B ⊆ U. <br>";
    } else if (esSubconjuntoPropio(elementosB, elementosUniverso)) {
        resultado += "B ⊂ U. <br>";
    } else {
        resultado += "B ⊄ U. <br>";
    }

    // Imprimir resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;
}

function calcularUnion() {   //PENDIENTE
    // Obtener los conjuntos de los inputs
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });

    // Verificar si alguno de los conjuntos es vacío
    if (elementosA.length === 0 && elementosB.length === 0) {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "Ambos conjuntos son vacíos.";
        return;
    }

    // Unir los elementos de los conjuntos sin duplicados
    var union = Array.from(new Set([...elementosA, ...elementosB]));

    // Convertir el resultado a una cadena separada por comas
    var resultadoUnion = union.join(", ");

    // Definición de la unión
    var definicion = "<p>Definición:</p>\n<p>Unión: A ∪ B contiene todos los elementos que están presentes en al menos uno de los conjuntos A y B.</p>";

    // Mostrar el resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A ∪ B = {" + resultadoUnion + "}";
}

function calcularInterseccion() {
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });

    // Calcular la intersección
    var interseccion = elementosA.filter(function(item) {
        return elementosB.includes(item);
    });

     // Definición de la intersección
     var definicion = "<p>Definición:</p>\n<p>Intersección: A ∩ B contiene los elementos que están presentes en ambos conjuntos A y B.</p>";

    // Mostrar el resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A ∩ B = {" + interseccion.join(", ") + "}";
}

 //Función que opera los conjuntos que el usuario dió
 function obtenerClasesDeEquivalencia(conjunto, modulo) {
    //Este set se crea para almacenar las clases unicas
    let clases = new Set(); 
    //Trabaja cada elemento y calcula sus clases de equivalencia 
    conjunto.forEach(elemento => {
        let clase = elemento % modulo; //Formula para calcular la clase de equivalencia
        clases.add(clase); //Agrega la clase al conjunto
    });    
    return clases; //Devuelve el conjunto de clases de equivalencia
}

//Función que imprime las clases de equivalencia entre []
function imprimirConjunto(nombre, conjunto) {
    let conjuntoStr = nombre + ": {";
    Array.from(conjunto).forEach((elemento, index) => {
        conjuntoStr += "[" + elemento + "]";
        if (index < conjunto.size - 1) {
            conjuntoStr += ", ";
        }
    });
    conjuntoStr += "}";
    return conjuntoStr;
}

//Función para calcular y mostrar las clases de equivalencia
function calcularClasesDeEquivalencia() {
    //Se leen los elementos de los campos de texto de los conjuntos
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(elemento => parseInt(elemento.trim()));
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(elemento => parseInt(elemento.trim()));
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(elemento => parseInt(elemento.trim()));
    //Se leen los elementos del campo de texto del módulo
    let modulo = parseInt(document.getElementById("modulo").value);

    //Llama a la función obtenerClasesDeEquivalencia para trabajar cada uno de los conjuntos dados por el usuario
    let clasesConjuntoA = obtenerClasesDeEquivalencia(conjuntoA, modulo);
    let clasesConjuntoB = obtenerClasesDeEquivalencia(conjuntoB, modulo);
    let clasesConjuntoC = obtenerClasesDeEquivalencia(conjuntoC, modulo);

    //Crea un conjunto con todas las clases de equivalencia únicas
    let clasesTotales = new Set([...clasesConjuntoA, ...clasesConjuntoB, ...clasesConjuntoC]);

    //Se imprimen los resultados en forma de cadena
    let resultadosStr = `
        <p>${imprimirConjunto("Clases de Equivalencia del Conjunto A", clasesConjuntoA)}</p>
        <p>${imprimirConjunto("Clases de Equivalencia del Conjunto B", clasesConjuntoB)}</p>
        <p>${imprimirConjunto("Clases de Equivalencia del Conjunto C", clasesConjuntoC)}</p>
        <p>${imprimirConjunto("Conjunto de todas las Clases de Equivalencia Únicas", clasesTotales)}</p>
    `;

    //Muestra los resultados
    document.getElementById("resultado").innerHTML = resultadosStr;
}

//Esta función se encarga de trabajar los datos obtenidos por la función operacionConModulo()
//Calcula la suma, resta, multiplicación y división de los datos y los imprime de igual forma
function opMod(datoA, datoB, modulo) {
    //Los datos se convierten en numeros flotantes
    datoA = parseFloat(datoA); 
    datoB = parseFloat(datoB); 
    modulo = parseFloat(modulo); 
    
    //Verificador de validez de datos
    if (isNaN(datoA) || isNaN(datoB) || isNaN(modulo)) {
        return "Error: Datos ingresados no válidos";
    }

    //Se hacen todas las operaciones con los datos proporcionados
    let suma = (datoA + datoB) % modulo;
    let resta = (datoA - datoB) % modulo;
    let multiplicacion = (datoA * datoB) % modulo;

    //Se calcula la división pero tambien se verifica si no se esta dividiendo entre cero
    let division;
    if (datoB !== 0) {
        division = (datoA / datoB) % modulo;
    } else {
        division = "Error: No se puede dividir por cero";
    }

    //Imprime los resultados de cada operacion hecha 
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Suma con módulo: [${suma}]</p>
        <p>Resta con módulo: [${resta}]</p>
        <p>Multiplicación con módulo: [${multiplicacion}]</p>
        <p>División con módulo: [${division}]</p>
    `;
}

//Esta función más que nada solo llama a los datos de los campos de texto y los coloca en la función opMod()
function operacionesConModulo() {
    //Se crean variables a partir de los datos obtenidos de los campos de texto 
    let datoA = parseInt(document.getElementById("conjuntoA").value);
    let datoB = parseInt(document.getElementById("conjuntoB").value);
    let modulo = parseInt(document.getElementById("modulo").value);
    //Se llama a la funcion opMod() y se le ingresan los datos obtenidos de los campos de texto
    let res = opMod(datoA, datoB, modulo);
}

function calcularResta() {
    // Obtener los conjuntos de los inputs
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });

    // Verificar si el conjunto A es vacío
    if (elementosA.length === 0) {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "El conjunto A es vacío.";
        return;
    }

    // Filtrar los elementos del conjunto A que no están en B
    var restaAB = elementosA.filter(function(elemento) {
        return !elementosB.includes(elemento);
    });

    // Filtrar los elementos del conjunto B que no están en A
    var restaBA = elementosB.filter(function(elemento) {
        return !elementosA.includes(elemento);
    });

    // Convertir el resultado de A - B a una cadena separada por comas
    var resultadoRestaAB = restaAB.join(", ");

    // Convertir el resultado de B - A a una cadena separada por comas
    var resultadoRestaBA = restaBA.join(", ");

    // Definición de la resta
    var definicion = "<p>Definición:</p>\n<p>Resta de conjuntos: La resta A - B contiene todos los elementos que están presentes en A pero no en B.</p>";

    // Mostrar el resultado de A - B
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A - B = {" + resultadoRestaAB + "}<br><br>B - A = {" + resultadoRestaBA + "}";
}

function calcularConjuntoPotencia() {
    // Obtener los conjuntos A, B y C del input
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var conjuntoC = document.getElementById("conjuntoC").value;

    // Función para obtener el conjunto potencia de un conjunto
    function obtenerConjuntoPotencia(conjunto) {
        // Convertir el conjunto en un array
        var elementos = conjunto.split(",").map(function(item) {
            return item.trim();
        });

        // Obtener todas las combinaciones posibles de subconjuntos
        function obtenerCombinaciones(elementos) {
            var combinaciones = [[]];
            for (var i = 0; i < elementos.length; i++) {
                for (var j = 0, len = combinaciones.length; j < len; j++) {
                    combinaciones.push(combinaciones[j].concat(elementos[i]));
                }
            }
            return combinaciones;
        }

        // Eliminar los subconjuntos duplicados
        function eliminarDuplicados(arrays) {
            var resultado = [];
            var hash = {};
            for (var i = 0; i < arrays.length; i++) {
                var array = arrays[i].sort().join('|');
                if (!hash[array]) {
                    resultado.push(arrays[i]);
                    hash[array] = true;
                }
            }
            return resultado;
        }

        // Calcular el conjunto de partes
        var partes = obtenerCombinaciones(elementos);
        partes = eliminarDuplicados(partes);

        // Convertir el resultado a una cadena separada por comas
        var resultadoPartes = partes.map(function(subconjunto) {
            return "{" + subconjunto.join(", ") + "}";
        }).join(", ");

        return resultadoPartes;
    }

    // Calcular el conjunto potencia de A, B y C
    var conjuntoPotenciaA = obtenerConjuntoPotencia(conjuntoA);
    var conjuntoPotenciaB = obtenerConjuntoPotencia(conjuntoB);
    var conjuntoPotenciaC = obtenerConjuntoPotencia(conjuntoC);

    // Definición del conjunto de partes
    var definicion = "<p>Definición:</p>\n<p>Conjunto Potencia P(X): El conjunto potencia de un conjunto X es el conjunto que contiene todos los subconjuntos posibles de X, incluido el conjunto vacío y X mismo.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "P(A) = {" + conjuntoPotenciaA + "} <br> <br>P(B) = {" + conjuntoPotenciaB + "} <br> <br>P(C) = {" + conjuntoPotenciaC + "}";
}

function calcularComplementos() {
    // Obtener los conjuntos A, B, C y el universo del input
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var conjuntoC = document.getElementById("conjuntoC").value;
    var universo = document.getElementById("universo").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });
    var elementosC = conjuntoC.split(",").map(function(item) {
        return item.trim();
    });
    var elementosUniverso = universo.split(",").map(function(item) {
        return item.trim();
    });

    // Función para obtener el complemento de un conjunto respecto al universo
    function obtenerComplemento(conjunto, universo) {
        return universo.filter(function(elemento) {
            return !conjunto.includes(elemento);
        });
    }

    // Calcular los complementos de A, B y C
    var complementoA = obtenerComplemento(elementosA, elementosUniverso);
    var complementoB = obtenerComplemento(elementosB, elementosUniverso);
    var complementoC = obtenerComplemento(elementosC, elementosUniverso);

    // Convertir los resultados a cadenas separadas por comas
    var resultadoComplementoA = "{" + complementoA.join(", ") + "}";
    var resultadoComplementoB = "{" + complementoB.join(", ") + "}";
    var resultadoComplementoC = "{" + complementoC.join(", ") + "}";

    // Definición de los complementos
    var definicion = "<p>Definición:</p>\n<p>El complemento de un conjunto A con respecto a un universo U se define como el conjunto de todos los elementos en U que no están en A.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A' = " + resultadoComplementoA + "<br><br> B' = " + resultadoComplementoB + "<br><br> C' = " + resultadoComplementoC;
}


function calcularProductoCruz() {
    // Obtener los conjuntos A y B del input
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;

    // Convertir los conjuntos en arrays
    var elementosA = conjuntoA.split(",").map(function(item) {
        return item.trim();
    });
    var elementosB = conjuntoB.split(",").map(function(item) {
        return item.trim();
    });

    // Calcular el producto cruz de A y B
    var productoCruzAB = [];
    for (var i = 0; i < elementosA.length; i++) {
        for (var j = 0; j < elementosB.length; j++) {
            productoCruzAB.push("(" + elementosA[i] + ", " + elementosB[j] + ")");
        }
    }

    // Calcular el producto cruz de B y A
    var productoCruzBA = [];
    for (var i = 0; i < elementosB.length; i++) {
        for (var j = 0; j < elementosA.length; j++) {
            productoCruzBA.push("(" + elementosB[i] + ", " + elementosA[j] + ")");
        }
    }

    // Convertir los resultados a cadenas separadas por comas
    var resultadoProductoCruzAB = "{" + productoCruzAB.join(", ") + "}";
    var resultadoProductoCruzBA = "{" + productoCruzBA.join(", ") + "}";

    // Definición del producto cruz
    var definicion = "<p>Definición:</p>\n<p>Producto Cruz: Dos conjuntos A y B, denotado como A × B, es el conjunto de todos los pares ordenados (a, b) donde a pertenece a A y b pertenece a B.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A × B = " + resultadoProductoCruzAB + "<br><br>B × A = " + resultadoProductoCruzBA;
}

// tepox :P

/*
--------------------------------------------Regiones------------------------------------
*/
function CalcularRegion(){
  // Obtener los conjuntos ingresados por el usuario
  var universo = document.getElementById('universo').value.split(',');
  var conjuntoa = document.getElementById('conjuntoA').value.split(',');
  var conjuntob = document.getElementById('conjuntoB').value.split(',');
  var conjuntoc = document.getElementById('conjuntoC').value.split(',');
  // Calcular las Regiones de los conjuntos
  var R1 = calcularR1(conjuntoa, conjuntob, conjuntoc);
  var R2 = calcularR2(conjuntoa, conjuntob, conjuntoc);
  var R3 = calcularR3(conjuntoa, conjuntob, conjuntoc);

  var R4 = calcularR4(conjuntoa, conjuntob, conjuntoc);
  var R5 = calcularR5(conjuntoa, conjuntob, conjuntoc);
  var R6 = calcularR6(conjuntoa, conjuntob, conjuntoc);

  var R7 = calcularR7(conjuntoa, conjuntob, conjuntoc);
  var R8 = calcularR8(universo, conjuntoa, conjuntob, conjuntoc);
  // Mostrar el resultado
  mostrarResultadoRegion(R1, R2, R3, R4, R5, R6, R7, R8);
}
function calcularR1(conjuntoa, conjuntob, conjuntoc) {
  //Diferencia entre los conjuntos
  var tempo = conjuntoa.filter(elemento => !conjuntob.includes(elemento));
  //console.log(tempo);
  var R1 = tempo.filter(elemento => !conjuntoc.includes(elemento));
  return R1;
}
function calcularR2(conjuntoa, conjuntob, conjuntoc) {
  //var union = Array.from(new Set([...conjuntoa, ...conjuntob]));
  var tempo = conjuntob.filter(elemento => !conjuntoa.includes(elemento));
  //console.log(tempo);
  var R2 = tempo.filter(elemento => !conjuntoc.includes(elemento));
  return R2;
}
function calcularR3(conjuntoa, conjuntob, conjuntoc) {
  //var union = Array.from(new Set([...conjuntoa, ...conjuntob]));
  var tempo = conjuntoc.filter(elemento => !conjuntoa.includes(elemento));
  //console.log(tempo);
  var R3 = tempo.filter(elemento => !conjuntob.includes(elemento));
  return R3;
}
function calcularR4(conjuntoa, conjuntob, conjuntoc) {
  //Interseccion de elementos
  var tempo = conjuntoa.filter(elemento => conjuntoc.includes(elemento));
  //Diferencia del conjunto respecto a la interseccion
  var R5 = tempo.filter(elemento => !conjuntob.includes(elemento));
  return R5;
}
function calcularR5(conjuntoa, conjuntob, conjuntoc) {
  //Interseccion de elementos
  var tempo = conjuntoa.filter(elemento => conjuntob.includes(elemento));
  //Diferencia del conjunto respecto a la interseccion
  var R4 = tempo.filter(elemento => !conjuntoc.includes(elemento));
  return R4;
}
function calcularR6(conjuntoa, conjuntob, conjuntoc) {
  //Interseccion de elementos
  var tempo = conjuntoc.filter(elemento => conjuntob.includes(elemento));
  //Diferencia del conjunto respecto a la interseccion
  var R6 = tempo.filter(elemento => !conjuntoa.includes(elemento));
  return R6;
}
function calcularR7(conjuntoa, conjuntob, conjuntoc) {
  //Interseccion de los tres conjuntos
  var tempo = conjuntoa.filter(elemento => conjuntob.includes(elemento));
  var R7 = tempo.filter(elemento => conjuntoc.includes(elemento));
  return R7;
}
function calcularR8(universo, conjuntoa, conjuntob, conjuntoc) {
  //Union de los tres conjuntos
  var ab = Array.from(new Set([...conjuntoa, ...conjuntob]));
  var abc = Array.from(new Set([...ab, ...conjuntoc]));
  //Diferencia de Universo respecto a la union 
  var R8 = universo.filter(elemento => !abc.includes(elemento));
  return R8;
}
function mostrarResultadoRegion(R1, R2, R3, R4, R5, R6, R7, R8) {
  var resultadoContainer = document.getElementById('resultado');
  //var cardinalidad = R1.length;
  
  resultadoContainer.innerHTML = 'Elementos: ' + '<br>' + '<br>' + 
  '<strong>Region 1:</strong> ' + JSON.stringify(R1) + '<br>' + '<br>' + '<strong>Region 2:</strong> ' + JSON.stringify(R2) + '<br>' + '<br>' + '<strong>Region 3:</strong> ' + JSON.stringify(R3) + '<br>' + '<br>' + '<strong>Region 4:</strong> ' + JSON.stringify(R4) + '<br>' + '<br>' + '<strong>Region 5:</strong> ' + JSON.stringify(R5) + '<br>' + '<br>' + '<strong>Region 6:</strong> ' + JSON.stringify(R6) + '<br>' + '<br>' + '<strong>Region 7:</strong> ' + JSON.stringify(R7) + '<br>' + '<br>' + '<strong>Region 8:</strong> ' + JSON.stringify(R8) + '<br>';

  /* resultadoContainer.innerHTML = '<strong>Unión de Conjuntos:</strong><p>' + 'Elementos: ' + JSON.stringify(union) + '</p><p>' + 'Cardinalidad: ' + cardinalidad + '</p>'; */
}

/* 
----------------------------Composiciones--------------------------------
*/
function CalcularComposicion(){
    // Obtener los conjuntos ingresados por el usuario
      //Relacion A
    var temp2 = document.getElementById('relacionA').value.split(')').join('');
    var temp1 = temp2.split('(').join('');
    var Relacion1 = temp1.split(',');
  
      //Relacion B
    var temp2 = document.getElementById('relacionB').value.split(')').join('');
    var temp1 = temp2.split('(').join('');
    var Relacion2 = temp1.split(','); 
      
    // Calcular la composicion de las relaciones
    var Relacion3 = calcularComposicion(Relacion1, Relacion2);
  
    mostrarResultadoComposicion(Relacion3);
  }
  function calcularComposicion (Relacion1, Relacion2){
    var Relacion3 = [];
    var tempo = [];
    tempo[0] = [];
    var l = 1;
    for (var i = 1; i < Relacion1.length; i+=2) {
      for (var j = 0; j < Relacion2.length; j+=2) {
        if(Relacion1[i] == Relacion2[j]){
          tempo.push("(" + Relacion1[i-1] + ", " + Relacion2[j+1] + ")");
          console.log(tempo);
          var bool = true;
          for (var k = 0; k < l; k++){
            if (tempo[k] == tempo[l]){
              bool = false;
            }
          }
          if (bool == true) {
            Relacion3 = Relacion3.concat(tempo[l]);
          }
          l += 1;
          console.log(Relacion3);
        }
      }
    }
    return Relacion3;
  }
  function mostrarResultadoComposicion(Relacion3) {
    var resultadoContainer = document.getElementById('resultado');
    var conjunto = '{' + Relacion3.join(', ') + '}';
    resultadoContainer.innerHTML = 'Composicion de A -> C: <br> <strong>R1 ° R2:</strong> ' + conjunto + '<br><br>';
}

/* 
----------------------------Relaciones Binarias--------------------------------
*/

function calcularBinarias(){
    var ConjuntoA = document.getElementById('conjuntoA').value.split(',');
    var temp2 = document.getElementById('relacionA').value.split(')').join('');
    var temp1 = temp2.split('(').join('');
    var Relacion = temp1.split(',');
    
    var des = 0;

  //Reflexiva
    var bandera = 0;
    for (var i = 0; i < Relacion.length; i+=2) {
        if (Relacion[i] == Relacion[i+1]){
            bandera += 1;
        }
    }
    if (bandera == ConjuntoA.length) {
      var Reflexiva = 'La relacion es Reflexiva';
      des += 1;
    }
    else {
      var Reflexiva = 'La relacion no es Reflexiva';
    }

    //Transitividad
  var Transitiva =  'La relacion es Transitiva';
  des += 2;
    for (let [a,b] of Relacion) {
      // Verificar si existe un elemento c tal que (a, c) y (c, b) pertenecen a la relación
      for (let [c,d] of Relacion) {
        if (b === c && !Relacion.has([a,d])) {
          var Transitiva =  'La relacion no es Transitiva';
          des += 2;
          j += Relacion.length;
          i += Relacion.length;
        }
      }
    }
  
  //Antisimetria
    var Antisimetria = 'La relacion es Antisimetrica';
    des += 3;
    for (var i = 0; i < Relacion.length; i+=2) {
      for (var j = 0; j < Relacion.length; j+=2){
        if (j == i){
          j += 2;
        }
        if (Relacion[i]+Relacion[i+1] == Relacion[j+1]+Relacion[j]){
          var Antisimetria = 'La relacion no es Antisimetrica';
          des -= 3;
          j += Relacion.length;
          i += Relacion.length;
        }
      }
    }

    //Simetria
    bandera = 0;
    for (var i = 0; i < Relacion.length; i+=2) {
      for (var j = 1; j < Relacion.length; j+=2){
        if (Relacion[i] == Relacion[j]){
          if (Relacion[i+1] == Relacion[j-1]){
            bandera += 2;
          }
        }
      }
    }
    if (bandera == Relacion.length) {
      var Simetria = 'La relacion es Simetrica';
      des += 4;
    }
    else{
      var Simetria = 'La relacion no es Simetrica';
    }

    var orden;
    var mac, mic;
    var mi = [];
    var ma = [];

    if(des < 6){
        orden = '∴ La relacion no pertenece a ninugun orden';
        mostrarResultadoBinario(Reflexiva, Simetria, Transitiva, Antisimetria, orden)
    }
    if (des == 6){
        orden = '∴ La relacion es de Orden Parcial';
        for (var i = 0; i < ConjuntoA.length; i++){
            mac = 0;
            mic = 0;
            for (var j = 0; j < Relacion.length; j+=2){
                if (ConjuntoA[i] == Relacion[j]){
                    mac += 1;
                }
                if (ConjuntoA[i] == Relacion[j+1]){
                    mic += 1;
                }
            }
            if (mac == 1){
                ma = ma.concat(ConjuntoA[i]);
            }
            if (mic == 1){
                mi = mi.concat(ConjuntoA[i]);
            }
        }
        var minimales = 'Los minimales son: '+mi;
        var maximales = 'Los maximales son: '+ma;
        mostrarResultadoParcial(Reflexiva, Simetria, Transitiva, Antisimetria, orden, minimales, maximales);
    }
    if (des == 7){
        orden = '∴ La relacion es una Relacion Equivalente';
        //Comprobar la Particion inducida
        var comp = [];
        var ConDis = [];
        var ConCos = [];
        var p = 1;
        for (var k = 0; k < ConjuntoA.length; k++){
            var  bool1 = true;
            for (u = 0; u < comp.length; u++){
                if (comp[u] == ConjuntoA[k]){
                    bool1 = false;
                }
            }
            if (bool1 == true){
                var tempo = [];
                ConCos.push('[' + ConjuntoA[k] + ']');
                tempo.push(ConjuntoA[k]);
                comp.push(ConjuntoA[k]);
                for (var i = 0; i < Relacion.length; i+=2){
                    if (ConjuntoA[k] == Relacion[i] && ConjuntoA[k] != Relacion[i   +1]){
                        for (var j = 1; j < Relacion.length; j++){
                            if (Relacion[i] == Relacion[j]){
                                tempo.push(Relacion[i+1]);
                                j += Relacion.length;
                            }
                        }
                        comp.push(Relacion[i+1]);
                    }
                }
                ConDis.push(' A'+ p + " = {" + tempo + "}");
                p += 1;
            }
        }
        mostrarResultadoEquivalente(Reflexiva, Simetria, Transitiva, Antisimetria, orden, ConDis, ConCos)
    }
    if (des == 10){
        orden = '∴ La relacion es de Orden Total';
        mostrarResultadoBinario(Reflexiva, Simetria, Transitiva, Antisimetria, orden)
    }
    
}
//resultado de Orden parcial
function mostrarResultadoParcial(Reflexiva, Simetria, Transitiva, Antisimetria, orden, minimales, maximales){
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = '<strong>Relacion :</strong> ' + '<br>' + JSON.stringify(Reflexiva) + '<br>' + JSON.stringify(Simetria) + '<br>' + JSON.stringify(Antisimetria) + '<br>' + JSON.stringify(Transitiva) + '<br>' + '<br>' + JSON.stringify(orden) + '<br>' + JSON.stringify(minimales) + '<br>' + JSON.stringify(maximales);
}
//resultado de relacion equivalente
function mostrarResultadoEquivalente(Reflexiva, Simetria, Transitiva, Antisimetria, orden, ConDis, ConCos){
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = '<strong>Relacion :</strong> ' + '<br>' + JSON.stringify(Reflexiva) + '<br>' + JSON.stringify(Simetria) + '<br>' + JSON.stringify(Antisimetria) + '<br>' + JSON.stringify(Transitiva) + '<br>' + '<br>' + JSON.stringify(orden) + '<br> Conjunto Cociente: ' + JSON.stringify(ConCos) + '<br> Particion Inducida: ' + JSON.stringify(ConDis);
}
//para relacion total o ninguna
function mostrarResultadoBinario(Reflexiva, Simetria, Transitiva, Antisimetria, orden){
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = '<strong>Relacion :</strong> ' + '<br>' + JSON.stringify(Reflexiva) + '<br>' + JSON.stringify(Simetria) + '<br>' + JSON.stringify(Antisimetria) + '<br>' + JSON.stringify(Transitiva) + '<br>' + '<br>' + JSON.stringify(orden);
}

function mostrarMatrizRelacion() {
    var conjuntoA = document.getElementById('conjuntoA').value.split(',').map(function(item) {
        return item.trim();
    });

    conjuntoA.sort();

    var relacionInput = document.getElementById('relacionA');
    var relacion = relacionInput.value.match(/\((\d+),(\d+)\)/g);

    // Obtener los pares ordenados de la relación para mostrar en el título
    var paresOrdenados = relacion ? relacion.join(', ') : '';

    // Crear el texto del título que incluye los pares ordenados de la relación
    var tituloTexto = "Matriz de Relación: " + paresOrdenados;

    // Crear el elemento de título y establecer su contenido
    var tituloElemento = document.createElement('p');
    tituloElemento.textContent = tituloTexto;

    // Agregar el título al contenedor de resultado en la página
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar cualquier contenido previo
    resultado.appendChild(tituloElemento);

    var matrizRelacion = [];
    for (var i = 0; i < conjuntoA.length; i++) {
        matrizRelacion[i] = [];
        for (var j = 0; j < conjuntoA.length; j++) {
            matrizRelacion[i][j] = 0;
        }
    }

    relacion.forEach(function(par) {
        var elementos = par.match(/\d+/g);
        var elementoA = parseInt(elementos[0]);
        var elementoB = parseInt(elementos[1]);

        var indiceA = conjuntoA.indexOf(elementoA.toString());
        var indiceB = conjuntoA.indexOf(elementoB.toString());

        if (indiceA !== -1 && indiceB !== -1) {
            matrizRelacion[indiceA][indiceB] = 1;
        }
    });

    // Crear y agregar la tabla de la matriz de relación
    var tabla = document.createElement('table');
    var encabezado = tabla.createTHead().insertRow();
    encabezado.insertCell().appendChild(document.createTextNode(''));

    conjuntoA.forEach(function(elemento) {
        encabezado.insertCell().appendChild(document.createTextNode(elemento));
    });

    conjuntoA.forEach(function(fila, indiceFila) {
        var row = tabla.insertRow();
        row.insertCell().appendChild(document.createTextNode(fila));
        matrizRelacion[indiceFila].forEach(function(valor) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(valor));
        });
    });

    resultado.appendChild(tabla);
}

function irAGrafos() {
    window.location.href = "Grafos.html"
}
