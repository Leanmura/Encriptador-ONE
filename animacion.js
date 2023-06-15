function encriptar() {
	let textoEntrada = String(document.getElementById("texto-entrada").value);
	textoEntrada = textoEntrada.trim();
	console.log(textoEntrada);
	let textoSalida = "";
	for (let i = 0; i < textoEntrada.length; i++) {
		switch (textoEntrada[i]) {
			case "a":
				textoSalida += "ai";
				break;
			case "i":
				textoSalida += "imes";
				break;
			case "u":
				textoSalida += "ufat";
				break;
			case "e":
				textoSalida += "enter";
				break;
			case "o":
				textoSalida += "ober";
				break;
			default:
				textoSalida += textoEntrada[i];
		}
	}

	console.log(textoSalida);

	imprimirTextoSalida(textoSalida);
}

function dencriptar() {
	let textoEntrada = String(document.getElementById("texto-entrada").value);
	textoEntrada = textoEntrada.trim();
	console.log(textoEntrada);
	let textoSalida = "";
	for (let i = 0; i < textoEntrada.length; i++) {
		switch (textoEntrada[i]) {
			case "a":
				textoSalida += "a";
				i++;
				break;
			case "i":
				textoSalida += "i";
				i += 3;
				break;
			case "u":
				textoSalida += "u";
				i += 3;
				break;
			case "e":
				textoSalida += "e";
				i += 4;
				break;
			case "o":
				textoSalida += "o";
				i += 3;
				break;
			default:
				textoSalida += textoEntrada[i];
		}
	}
	imprimirTextoSalida(textoSalida);
}

function imprimirTextoSalida(textoSalida) {
	console.log(textoSalida);

	if (textoSalida != "") {
		document.getElementById("texto-salida").value = textoSalida;
		document.getElementById("copiar").style.display = "Block";
		ocultarImagen("None");
	} else {
		document.getElementById("texto-salida").value = "";
		document.getElementById("copiar").style.display = "None";
		ocultarImagen("Block");
	}
}

function ocultarImagen(valor) {
	document.getElementById("munieco").style.display = valor;
	document.getElementById("texto-munieco").style.display = valor;
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
