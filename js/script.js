function calcularCardinalidades() {
    // Obtener el universo, A y B del input
    var universoInput = document.getElementById("universo").value;
    var conjuntoAInput = document.getElementById("conjuntoA").value;
    var conjuntoBInput = document.getElementById("conjuntoB").value;

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

    // Calcular las cardinalidades
    var cardinalidadUniverso = elementosUniverso.length;
    var cardinalidadA = elementosA.length;
    var cardinalidadB = elementosB.length;

    // Definición de la cardinalidad
    var definicion = "<p>Definición:</p>\n<p>Cardinalidad: Número de elementos que contiene.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "<br>Cardinalidad del Universo = " + cardinalidadUniverso + "<br>Cardinalidad de A = " + cardinalidadA + "<br>Cardinalidad de B = " + cardinalidadB;
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
    // Obtener los conjuntos A y B del input
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;

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

    // Calcular el conjunto potencia de A y B
    var conjuntoPotenciaA = obtenerConjuntoPotencia(conjuntoA);
    var conjuntoPotenciaB = obtenerConjuntoPotencia(conjuntoB);

    // Definición del conjunto de partes
    var definicion = "<p>Definición:</p>\n<p>Conjunto Potencia P(X): El conjunto potencia de un conjunto X es el conjunto que contiene todos los subconjuntos posibles de X, incluido el conjunto vacío y X mismo.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "P(A) = {" + conjuntoPotenciaA + "} <br> <br>P(B) = {" + conjuntoPotenciaB + "}";
}

function calcularComplementos() {
    // Obtener los conjuntos A, B y el universo del input
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

    // Función para obtener el complemento de un conjunto respecto al universo
    function obtenerComplemento(conjunto, universo) {
        return universo.filter(function(elemento) {
            return !conjunto.includes(elemento);
        });
    }

    // Calcular los complementos de A y B
    var complementoA = obtenerComplemento(elementosA, elementosUniverso);
    var complementoB = obtenerComplemento(elementosB, elementosUniverso);

    // Convertir los resultados a cadenas separadas por comas
    var resultadoComplementoA = "{" + complementoA.join(", ") + "}";
    var resultadoComplementoB = "{" + complementoB.join(", ") + "}";

    // Definición de los complementos
    var definicion = "<p>Definición:</p>\n<p>El complemento de un conjunto A con respecto a un universo U se define como el conjunto de todos los elementos en U que no están en A.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A' = " + resultadoComplementoA + "<br><br> B' = " + resultadoComplementoB;
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

function calcularRelaciones() {
    // Obtener los conjuntos del input
    var conjuntoA = document.getElementById("conjuntoA").value.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    var conjuntoB = document.getElementById("conjuntoB").value.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    // Definición de las relaciones
    var definicion = "<p>Definiciones:</p>\n";
    definicion += "<p>Relación binaria: Una relación entre dos conjuntos es un subconjunto del producto cartesiano de los conjuntos.</p>";
    definicion += "<p>Composición de relaciones: La composición de dos relaciones R y S es la relación que contiene todos los pares ordenados (a, c) tales que existe un elemento b para el cual (a, b) está en R y (b, c) está en S.</p>";
    definicion += "<p>Relación de orden parcial: Una relación R es un orden parcial si es reflexiva, antisimétrica y transitiva.</p>";
    definicion += "<p>Relación de equivalencia: Una relación R es de equivalencia si es reflexiva, simétrica y transitiva.</p>";

    // Calcular relaciones binarias
    var relacionBinaria = [];
    for (var i = 0; i < conjuntoA.length; i++) {
        for (var j = 0; j < conjuntoB.length; j++) {
            relacionBinaria.push("(" + conjuntoA[i] + ", " + conjuntoB[j] + ")");
        }
    }

    // Calcular composición de relaciones
    var composicionRelaciones = [];
    for (var i = 0; i < conjuntoA.length; i++) {
        for (var j = 0; j < conjuntoB.length; j++) {
            composicionRelaciones.push("(" + conjuntoA[i] + ", " + conjuntoB[j] + ")");
        }
    }

    // Calcular relación de orden parcial
    var relacionOrdenParcial = [];
    for (var i = 0; i < conjuntoA.length; i++) {
        for (var j = i; j < conjuntoA.length; j++) {
            relacionOrdenParcial.push("(" + conjuntoA[i] + ", " + conjuntoA[j] + ")");
        }
    }

    // Calcular relación de equivalencia
    var relacionEquivalencia = [];
    for (var i = 0; i < conjuntoA.length; i++) {
        relacionEquivalencia.push("(" + conjuntoA[i] + ", " + conjuntoA[i] + ")");
    }

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "<br>Relación binaria = {" + relacionBinaria.join(", ") + "}<br><br>Composición de relaciones = {" + composicionRelaciones.join(", ") + "}<br><br>Relación de orden parcial = {" + relacionOrdenParcial.join(", ") + "}<br><br>Relación de equivalencia = {" + relacionEquivalencia.join(", ") + "}";
}

function calcularDiferenciaSimetrica() {
    // Obtener los conjuntos del input
    var conjuntoA = document.getElementById("conjuntoA").value.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    var conjuntoB = document.getElementById("conjuntoB").value.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    // Calcular la diferencia simétrica
    var diferenciaAB = conjuntoA.filter(function(elemento) {
        return !conjuntoB.includes(elemento);
    });

    var diferenciaBA = conjuntoB.filter(function(elemento) {
        return !conjuntoA.includes(elemento);
    });

    var diferenciaSimetrica = diferenciaAB.concat(diferenciaBA);

    // Definición de la diferencia simétrica
    var definicion = "<p>Definición:</p>\n";
    definicion += "<p>Diferencia simétrica: La diferencia simétrica entre dos conjuntos A y B, denotada como A △ B, es el conjunto que contiene todos los elementos que están en A pero no en B, junto con todos los elementos que están en B pero no en A.</p>";

    // Mostrar el resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "Diferencia simétrica: {" + diferenciaSimetrica.join(", ") + "}";
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
