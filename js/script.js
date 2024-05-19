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

function Subconjuntos() {
    // Obtener los valores de los conjuntos U, A, B y C
    let conjuntoU = document.getElementById('universo').value.split(',').map(item => item.trim()).filter(item => item !== "");
    let conjuntoA = document.getElementById('conjuntoA').value.split(',').map(item => item.trim()).filter(item => item !== "");
    let conjuntoB = document.getElementById('conjuntoB').value.split(',').map(item => item.trim()).filter(item => item !== "");
    let conjuntoC = document.getElementById('conjuntoC').value.split(',').map(item => item.trim()).filter(item => item !== "");

    // Convertir los elementos a números si es posible
    conjuntoU = conjuntoU.map(item => isNaN(item) ? item : Number(item));
    conjuntoA = conjuntoA.map(item => isNaN(item) ? item : Number(item));
    conjuntoB = conjuntoB.map(item => isNaN(item) ? item : Number(item));
    conjuntoC = conjuntoC.map(item => isNaN(item) ? item : Number(item));

    // Función para comprobar si un conjunto es subconjunto de otro
    function esSubconjunto(subconjunto, conjunto) {
        return subconjunto.every(elemento => conjunto.includes(elemento));
    }

    // Verificar subconjuntos entre A, B y C, y con U
    let A_esSubconjuntoDeB = esSubconjunto(conjuntoA, conjuntoB);
    let B_esSubconjuntoDeA = esSubconjunto(conjuntoB, conjuntoA);
    let A_esSubconjuntoDeC = esSubconjunto(conjuntoA, conjuntoC);
    let C_esSubconjuntoDeA = esSubconjunto(conjuntoC, conjuntoA);
    let B_esSubconjuntoDeC = esSubconjunto(conjuntoB, conjuntoC);
    let C_esSubconjuntoDeB = esSubconjunto(conjuntoC, conjuntoB);

    let A_esSubconjuntoDeU = esSubconjunto(conjuntoA, conjuntoU);
    let B_esSubconjuntoDeU = esSubconjunto(conjuntoB, conjuntoU);
    let C_esSubconjuntoDeU = esSubconjunto(conjuntoC, conjuntoU);

    // Definición de subconjuntos
    let resultado = "Definición: Un conjunto A es un subconjunto de un conjunto B (A ⊆ B) si todos los elementos de A también son elementos de B.<br><br>";

    // Agregar resultados si corresponden
    if (A_esSubconjuntoDeB) {
        resultado += "A ⊆ B<br>";
    }
    if (B_esSubconjuntoDeA) {
        resultado += "B ⊆ A<br>";
    }
    if (A_esSubconjuntoDeC) {
        resultado += "A ⊆ C<br>";
    }
    if (C_esSubconjuntoDeA) {
        resultado += "C ⊆ A<br>";
    }
    if (B_esSubconjuntoDeC) {
        resultado += "B ⊆ C<br>";
    }
    if (C_esSubconjuntoDeB) {
        resultado += "C ⊆ B<br>";
    }
    if (A_esSubconjuntoDeU) {
        resultado += "A ⊆ U<br>";
    }
    if (B_esSubconjuntoDeU) {
        resultado += "B ⊆ U<br>";
    }
    if (C_esSubconjuntoDeU) {
        resultado += "C ⊆ U<br>";
    }

    // Mostrar el resultado
    if (A_esSubconjuntoDeB || B_esSubconjuntoDeA || A_esSubconjuntoDeC || C_esSubconjuntoDeA || B_esSubconjuntoDeC || C_esSubconjuntoDeB || A_esSubconjuntoDeU || B_esSubconjuntoDeU || C_esSubconjuntoDeU) {
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Definición: Un conjunto A es un subconjunto de un conjunto B (A ⊆ B) si todos los elementos de A también son elementos de B.<br><br>Ninguno de los conjuntos es subconjunto de los otros.";
    }
}

function calcularUnion() {
    // Obtener los conjuntos de los inputs
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var conjuntoC = document.getElementById("conjuntoC").value;

    // Función para determinar si un conjunto contiene subconjuntos
    function tieneSubconjuntos(conjunto) {
        return conjunto.includes("{") && conjunto.includes("}");
    }

    // Función para convertir una cadena de subconjuntos a un array de strings
    function convertirACaracterArray(conjunto) {
        conjunto = conjunto.replace(/\s/g, "");
        if (conjunto === "") return [];
        let subconjuntos = conjunto.split("},{").map(subconjunto => {
            return "{" + subconjunto.replace(/{|}/g, "") + "}";
        });
        return subconjuntos;
    }

    // Función para convertir una cadena de elementos individuales a un array de strings
    function convertirAElementoArray(conjunto) {
        return conjunto.replace(/\s/g, "").split(",").filter(item => item !== "");
    }

    // Función para unir subconjuntos sin duplicados
    function unirSinDuplicados(conjunto1, conjunto2) {
        let union = conjunto1.slice();
        conjunto2.forEach(subconjunto => {
            if (!union.includes(subconjunto)) {
                union.push(subconjunto);
            }
        });
        return union;
    }

    // Función para unir elementos individuales sin duplicados
    function unirElementosSinDuplicados(conjunto1, conjunto2) {
        return Array.from(new Set([...conjunto1, ...conjunto2])).sort();
    }

    // Verificar y convertir los conjuntos A, B y C
    var elementosA, elementosB, elementosC;
    var tieneSubconjuntosA = tieneSubconjuntos(conjuntoA);
    var tieneSubconjuntosB = tieneSubconjuntos(conjuntoB);
    var tieneSubconjuntosC = tieneSubconjuntos(conjuntoC);

    if (tieneSubconjuntosA) {
        elementosA = convertirACaracterArray(conjuntoA);
    } else {
        elementosA = convertirAElementoArray(conjuntoA);
    }

    if (tieneSubconjuntosB) {
        elementosB = convertirACaracterArray(conjuntoB);
    } else {
        elementosB = convertirAElementoArray(conjuntoB);
    }

    if (tieneSubconjuntosC) {
        elementosC = convertirACaracterArray(conjuntoC);
    } else {
        elementosC = convertirAElementoArray(conjuntoC);
    }

    // Unir los elementos de los conjuntos adecuadamente
    var unionAB, unionAC, unionBC, unionABC;

    if (tieneSubconjuntosA || tieneSubconjuntosB) {
        unionAB = unirSinDuplicados(elementosA, elementosB);
    } else {
        unionAB = unirElementosSinDuplicados(elementosA, elementosB);
    }

    if (tieneSubconjuntosA || tieneSubconjuntosC) {
        unionAC = unirSinDuplicados(elementosA, elementosC);
    } else {
        unionAC = unirElementosSinDuplicados(elementosA, elementosC);
    }

    if (tieneSubconjuntosB || tieneSubconjuntosC) {
        unionBC = unirSinDuplicados(elementosB, elementosC);
    } else {
        unionBC = unirElementosSinDuplicados(elementosB, elementosC);
    }

    if (tieneSubconjuntosA || tieneSubconjuntosB || tieneSubconjuntosC) {
        unionABC = unirSinDuplicados(unionAB, elementosC);
    } else {
        unionABC = unirElementosSinDuplicados(unionAB, elementosC);
    }

    // Convertir los resultados a cadenas
    var resultadoUnionAB = tieneSubconjuntosA || tieneSubconjuntosB ? "{" + unionAB.join(", ") + "}" : "{" + unionAB.join(", ") + "}";
    var resultadoUnionAC = tieneSubconjuntosA || tieneSubconjuntosC ? "{" + unionAC.join(", ") + "}" : "{" + unionAC.join(", ") + "}";
    var resultadoUnionBC = tieneSubconjuntosB || tieneSubconjuntosC ? "{" + unionBC.join(", ") + "}" : "{" + unionBC.join(", ") + "}";
    var resultadoUnionABC = tieneSubconjuntosA || tieneSubconjuntosB || tieneSubconjuntosC ? "{" + unionABC.join(", ") + "}" : "{" + unionABC.join(", ") + "}";

    // Definición de las uniones
    var definicion = "<p>Definición:</p>\n<p>Unión: A ∪ B contiene todos los elementos que están presentes en al menos uno de los conjuntos A y B.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A ∪ B = " + resultadoUnionAB + "<br><br>A ∪ C = " + resultadoUnionAC + "<br><br>B ∪ C = " + resultadoUnionBC + "<br><br>A ∪ B ∪ C = " + resultadoUnionABC;
}

function calcularInterseccion() {
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var conjuntoC = document.getElementById("conjuntoC").value;

    // Función para determinar si un conjunto contiene subconjuntos
    function tieneSubconjuntos(conjunto) {
        return conjunto.includes("{") && conjunto.includes("}");
    }

    // Función para convertir una cadena de subconjuntos a un array de strings
    function convertirACaracterArray(conjunto) {
        conjunto = conjunto.replace(/\s/g, "");
        if (conjunto === "") return [];
        let subconjuntos = conjunto.split("},{").map(subconjunto => {
            return "{" + subconjunto.replace(/{|}/g, "") + "}";
        });
        return subconjuntos;
    }

    // Función para convertir una cadena de elementos individuales a un array de strings
    function convertirAElementoArray(conjunto) {
        return conjunto.replace(/\s/g, "").split(",").filter(item => item !== "");
    }

    // Función para calcular la intersección de subconjuntos
    function interseccionSubconjuntos(conjunto1, conjunto2) {
        return conjunto1.filter(subconjunto => conjunto2.includes(subconjunto));
    }

    // Función para calcular la intersección de elementos individuales
    function interseccionElementos(conjunto1, conjunto2) {
        return conjunto1.filter(item => conjunto2.includes(item));
    }

    // Verificar y convertir los conjuntos A, B y C
    var elementosA, elementosB, elementosC;
    var tieneSubconjuntosA = tieneSubconjuntos(conjuntoA);
    var tieneSubconjuntosB = tieneSubconjuntos(conjuntoB);
    var tieneSubconjuntosC = tieneSubconjuntos(conjuntoC);

    if (tieneSubconjuntosA) {
        elementosA = convertirACaracterArray(conjuntoA);
    } else {
        elementosA = convertirAElementoArray(conjuntoA);
    }

    if (tieneSubconjuntosB) {
        elementosB = convertirACaracterArray(conjuntoB);
    } else {
        elementosB = convertirAElementoArray(conjuntoB);
    }

    if (tieneSubconjuntosC) {
        elementosC = convertirACaracterArray(conjuntoC);
    } else {
        elementosC = convertirAElementoArray(conjuntoC);
    }

    // Calcular la intersección adecuadamente
    var interseccionAB, interseccionAC, interseccionBC;

    if (tieneSubconjuntosA || tieneSubconjuntosB) {
        interseccionAB = interseccionSubconjuntos(elementosA, elementosB);
    } else {
        interseccionAB = interseccionElementos(elementosA, elementosB);
    }

    if (tieneSubconjuntosA || tieneSubconjuntosC) {
        interseccionAC = interseccionSubconjuntos(elementosA, elementosC);
    } else {
        interseccionAC = interseccionElementos(elementosA, elementosC);
    }

    if (tieneSubconjuntosB || tieneSubconjuntosC) {
        interseccionBC = interseccionSubconjuntos(elementosB, elementosC);
    } else {
        interseccionBC = interseccionElementos(elementosB, elementosC);
    }

    // Convertir los resultados a cadenas
    var resultadoInterseccionAB = tieneSubconjuntosA || tieneSubconjuntosB ? "{" + interseccionAB.join(", ") + "}" : "{" + interseccionAB.join(", ") + "}";
    var resultadoInterseccionAC = tieneSubconjuntosA || tieneSubconjuntosC ? "{" + interseccionAC.join(", ") + "}" : "{" + interseccionAC.join(", ") + "}";
    var resultadoInterseccionBC = tieneSubconjuntosB || tieneSubconjuntosC ? "{" + interseccionBC.join(", ") + "}" : "{" + interseccionBC.join(", ") + "}";

    // Definición de la intersección
    var definicion = "<p>Definición:</p>\n<p>Intersección: A ∩ B contiene los elementos que están presentes en ambos conjuntos A y B.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A ∩ B = " + resultadoInterseccionAB + "<br><br>A ∩ C = " + resultadoInterseccionAC + "<br><br>B ∩ C = " + resultadoInterseccionBC;
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

function calcularModulo() {
    // Obtener los valores ingresados por el usuario
    let valorA = parseInt(document.getElementById("conjuntoA").value);
    let valorB = parseInt(document.getElementById("conjuntoB").value);
    let valorM = parseInt(document.getElementById("modulo").value);

    // Calcular los módulos
    let moduloA = valorA % valorM;
    let moduloB = valorB % valorM;

    // Comparar los módulos
    let equivalentes = moduloA === moduloB;
    let mensajeEquivalencia = equivalentes ? "Son equivalentes" : "No son equivalentes";

    // Formatear los resultados
    let resultadosStr = `
        <p>Valor A: ${valorA}, Valor M: ${valorM}, A % M = ${moduloA}</p>
        <p>Valor B: ${valorB}, Valor M: ${valorM}, B % M = ${moduloB}</p>
        <p> ${valorA} = ${valorB} MOD ${valorM} </p>
        <p>${mensajeEquivalencia}</p>
    `;

    // Mostrar los resultados
    document.getElementById("resultado").innerHTML = resultadosStr;
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
    // Obtener los conjuntos A, B y C del input
    var conjuntoA = document.getElementById("conjuntoA").value;
    var conjuntoB = document.getElementById("conjuntoB").value;
    var conjuntoC = document.getElementById("conjuntoC").value;

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

    // Calcular el producto cruz de A y C
    var productoCruzAC = [];
    for (var i = 0; i < elementosA.length; i++) {
        for (var j = 0; j < elementosC.length; j++) {
            productoCruzAC.push("(" + elementosA[i] + ", " + elementosC[j] + ")");
        }
    }

    // Calcular el producto cruz de C y A
    var productoCruzCA = [];
    for (var i = 0; i < elementosC.length; i++) {
        for (var j = 0; j < elementosA.length; j++) {
            productoCruzCA.push("(" + elementosC[i] + ", " + elementosA[j] + ")");
        }
    }

    // Calcular el producto cruz de B y C
    var productoCruzBC = [];
    for (var i = 0; i < elementosB.length; i++) {
        for (var j = 0; j < elementosC.length; j++) {
            productoCruzBC.push("(" + elementosB[i] + ", " + elementosC[j] + ")");
        }
    }

    // Calcular el producto cruz de C y B
    var productoCruzCB = [];
    for (var i = 0; i < elementosC.length; i++) {
        for (var j = 0; j < elementosB.length; j++) {
            productoCruzCB.push("(" + elementosC[i] + ", " + elementosB[j] + ")");
        }
    }

    // Convertir los resultados a cadenas separadas por comas
    var resultadoProductoCruzAB = "{" + productoCruzAB.join(", ") + "}";
    var resultadoProductoCruzBA = "{" + productoCruzBA.join(", ") + "}";
    var resultadoProductoCruzAC = "{" + productoCruzAC.join(", ") + "}";
    var resultadoProductoCruzCA = "{" + productoCruzCA.join(", ") + "}";
    var resultadoProductoCruzBC = "{" + productoCruzBC.join(", ") + "}";
    var resultadoProductoCruzCB = "{" + productoCruzCB.join(", ") + "}";

    // Definición del producto cruz
    var definicion = "<p>Definición:</p>\n<p>Producto Cruz: Dos conjuntos A y B, denotado como A × B, es el conjunto de todos los pares ordenados (a, b) donde a pertenece a A y b pertenece a B.</p>";

    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "A × B = " + resultadoProductoCruzAB + "<br><br>B × A = " + resultadoProductoCruzBA + "<br><br>A × C = " + resultadoProductoCruzAC + "<br><br>C × A = " + resultadoProductoCruzCA + "<br><br>B × C = " + resultadoProductoCruzBC + "<br><br>C × B = " + resultadoProductoCruzCB;
}

/*
-------------------------------------------------------- Diferencia simetrica
*/

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

    var conjuntoC = document.getElementById("conjuntoC").value.split(",").map(function(item) {
        return item.trim();
    }).filter(function(item) {
        return item !== "";
    });

    // Calcular la diferencia simétrica A - B
    var diferenciaAB = conjuntoA.filter(function(elemento) {
        return !conjuntoB.includes(elemento);
    });

    var diferenciaBA = conjuntoB.filter(function(elemento) {
        return !conjuntoA.includes(elemento);
    });

    var diferenciaSimetricaAB = diferenciaAB.concat(diferenciaBA);

    // Calcular la diferencia simétrica A - C
    var diferenciaAC = conjuntoA.filter(function(elemento) {
        return !conjuntoC.includes(elemento);
    });

    var diferenciaCA = conjuntoC.filter(function(elemento) {
        return !conjuntoA.includes(elemento);
    });

    var diferenciaSimetricaAC = diferenciaAC.concat(diferenciaCA);

    // Calcular la diferencia simétrica B - C
    var diferenciaBC = conjuntoB.filter(function(elemento) {
        return !conjuntoC.includes(elemento);
    });

    var diferenciaCB = conjuntoC.filter(function(elemento) {
        return !conjuntoB.includes(elemento);
    });

    var diferenciaSimetricaBC = diferenciaBC.concat(diferenciaCB);

    // Definición de la diferencia simétrica
    var definicion = "<p>Definición:</p>\n";
    definicion += "<p>Diferencia simétrica: La diferencia simétrica entre dos conjuntos A y B, denotada como A △ B, es el conjunto que contiene todos los elementos que están en A pero no en B, junto con todos los elementos que están en B pero no en A.</p>";

    // Mostrar el resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = definicion + "Diferencia simétrica A △ B: {" + diferenciaSimetricaAB.join(", ") + "}" + '<br>' + "Diferencia simétrica A △ C: {" + diferenciaSimetricaAC.join(", ") + "}" + '<br>' + "Diferencia simétrica B △ C: {" + diferenciaSimetricaBC.join(", ") + "}";
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
    var relacion = relacionInput.value.match(/\((\w+),(\w+)\)/g); // Modificado para aceptar letras

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
        var elementos = par.match(/\w+/g); // Modificado para aceptar letras
        var elementoA = elementos[0];
        var elementoB = elementos[1];

        var indiceA = conjuntoA.indexOf(elementoA);
        var indiceB = conjuntoA.indexOf(elementoB);

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
