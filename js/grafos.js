let nodes = [];
let selectedNode = null;
let arcos = [];
let flechas = [];
let relaciones = [];
let vertexCount = -1;

function actualizarRelaciones() {
  relaciones = [];
  for (let i = 0; i < nodes.length; i++) {
    relaciones.push([]);
    for (let j = 0; j < nodes.length; j++) {
      relaciones[i].push(0); // Inicializar la matriz con ceros
    }
  }
  for (let i = 0; i < arcos.length; i++) {
    const arco = arcos[i];
    const index1 = nodes.indexOf(arco.node1);
    const index2 = nodes.indexOf(arco.node2);
    relaciones[index1][index2] = 1; // Establecer la relación como 1 en la matriz
  }
}

function imprimirMatriz() {
  let matrizStr = "<p style='color: white;'>Matriz de relaciones:</p><table border='1'><tr><td></td>";
  
  // Agregar encabezados horizontales
  for (let i = 0; i < relaciones.length; i++) {
    matrizStr += `<td style="color: blue;">${i}</td>`;
  }
  
  matrizStr += "</tr>";

  for (let i = 0; i < relaciones.length; i++) {
    matrizStr += `<tr><td style="color: blue;">${i}</td>`; // Agregar encabezado vertical
    for (let j = 0; j < relaciones[i].length; j++) {
      // Establecer el estilo de color blanco para los números
      matrizStr += `<td style="color: white;">${relaciones[i][j]}</td>`;
    }
    matrizStr += "</tr>";
  }
  matrizStr += "</table>";
  return matrizStr;
}


function actualizarYMostrarResultados() {
  actualizarRelaciones();
  let resultadosStr = `
  <p>${imprimirMatriz()}</p>
  <p style="color: white;">Relaciones:</p>
  <ul>
  `;
  for (let i = 0; i < relaciones.length; i++) {
    for (let j = 0; j < relaciones[i].length; j++) {
      if (relaciones[i][j] === 1) {
        // Establecer el estilo de color para las relaciones
        resultadosStr += `<li style="color: white;">(${nodes[i].number}, ${nodes[j].number})</li>`;
      }
    }
  }
  resultadosStr += "</ul>";
  document.getElementById("resultado").innerHTML = resultadosStr;
}


function getNodeAt(x, y, nodes) {
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index];
    const a = x - node.x;
    const b = y - node.y;

    const c = Math.sqrt(a * a + b * b);

    if (c < 45) {
      return node;
    }
  }
  return null;
}

function drawNodes(ctx, nodes) {
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index];

    if (node === selectedNode) {
      ctx.strokeStyle = "#0000FF";
    } else {
      ctx.strokeStyle = "#000000";
    }

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    if (node === selectedNode) {
      ctx.fillStyle = "#0000FF";
    } else {
      ctx.fillStyle = "#000000";
    }

    ctx.font = "30px Arial";
    ctx.fillText(index, node.x - 9, node.y - 25);
  }
}

function drawArcos(ctx, arcos) {
  for (let index = 0; index < arcos.length; index++) {
    const arco = arcos[index];
    ctx.beginPath();
    ctx.moveTo(arco.node1.x, arco.node1.y);
    ctx.lineTo(arco.node2.x, arco.node2.y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    drawArrow(ctx, arco.node1.x, arco.node1.y, arco.node2.x, arco.node2.y);
  }
}

function drawFlechas(ctx, flechas) {
  for (let index = 0; index < flechas.length; index++) {
    const flecha = flechas[index];
    ctx.lineWidth = 1;
    drawArrow(ctx, flecha.fromX, flecha.fromY, flecha.toX, flecha.toY);
  }
}

function drawArrow(ctx, fromX, fromY, toX, toY) {
  var headLength = 10; // Longitud de la cabeza de la flecha en píxeles
  var dx = toX - fromX;
  var dy = toY - fromY;
  var angle = Math.atan2(dy, dx);
  
  // Establecer el ancho de línea
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
  ctx.strokeStyle = "#000000";
  ctx.stroke();
}

window.onload = async () => {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  canvas.addEventListener("click", (e) => {
    let x = e.clientX - canvas.offsetLeft;
    let y = e.clientY - canvas.offsetTop;

    let tempNode = getNodeAt(x, y, nodes);

    if (selectedNode !== null && tempNode === null) {
      selectedNode = tempNode;
      tempNode = null;
    }

    if (selectedNode === null) {
      selectedNode = tempNode;
      tempNode = null;
    }

    if (selectedNode === null) {
      nodes.push({ x, y, number: ++vertexCount });               //aqui se guarda la informacion de los pares or
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedNode !== null && tempNode !== null) {
      arcos.push({ node1: selectedNode, node2: tempNode });
      selectedNode = null;
      tempNode = null;

    }
    drawArcos(context, arcos);
    drawNodes(context, nodes);
    drawFlechas(context, flechas);
    actualizarYMostrarResultados();
  });


  document.getElementById("drawArrow").addEventListener("click", () => {
    if (arcos.length > 0) {
      let lastArco = arcos[arcos.length - 1];
      flechas.push({ fromX: lastArco.node1.x, fromY: lastArco.node1.y, toX: lastArco.node2.x, toY: lastArco.node2.y });
      drawFlechas(context, flechas);
      actualizarYMostrarResultados();
    }
  });
};
