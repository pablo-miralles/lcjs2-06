import "./style.css";

let puntuacionTotal = 0;
const elementoImagen = document.querySelector(".cards__item-img");
const contenedorMensajePuntuacion = document.querySelector(".puntuacion-total");
const botonDameCarta = document.querySelector(".dame-carta");
const botonMePlanto = document.querySelector(".me-planto");
const botonReset = document.querySelector(".reset");

const obtenerImagen = (carta: number): string => {
	switch (carta) {
		case 1:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
			break;
		case 2:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
			break;
		case 3:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
			break;
		case 4:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
			break;
		case 5:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
			break;
		case 6:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
			break;
		case 7:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
			break;
		case 10:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
			break;
		case 11:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
			break;
		case 12:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
			break;
		default:
			return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
			break;
	}
};

const imprimirImagen = (urlImagen: string): void => {
	if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
		elementoImagen.src = urlImagen;
	}
};

const obtenerCartaAleatoria = (): number => {
	let randomNum = Math.floor(Math.random() * 10);
	let cartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

	return cartas[randomNum];
};

const obtenerValorCartaAleatoria = (carta: number): number => {
	if (carta > 7) {
		return 0.5;
	}

	return carta;
};

const actualizarPuntuacionTotal = (valorCarta: number): void => {
	puntuacionTotal += valorCarta;
};

const imprimirMensajePuntuacion = (mensaje: string): void => {
	if (
		contenedorMensajePuntuacion &&
		contenedorMensajePuntuacion instanceof HTMLDivElement
	) {
		contenedorMensajePuntuacion.innerHTML = mensaje;
	}
};

const obtenerMensajeMePlanto = (puntuacionTotal: number): string => {
	if (puntuacionTotal >= 6 && puntuacionTotal < 7.7) {
		return "Puntos: " + puntuacionTotal + ". " + "Casi casi...";
	} else if (puntuacionTotal > 4 && puntuacionTotal < 6) {
		return (
			"Puntos: " +
			puntuacionTotal +
			". " +
			"Te ha entrado el canguelo eh?"
		);
	} else if (puntuacionTotal <= 4) {
		return "Puntos: " + puntuacionTotal + ". " + "Has sido muy conservador";
	} else {
		return "Puntos: " + puntuacionTotal;
	}
};

const habilitarBotones = (esVerdadero: boolean): void => {
	if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
		if (esVerdadero) {
			botonDameCarta.removeAttribute("disabled");
			botonDameCarta.setAttribute("style", "cursor:pointer");
		} else {
			botonDameCarta.setAttribute("disabled", "");
			botonDameCarta.setAttribute("style", "cursor:not-allowed");
		}
	}
	if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
		if (esVerdadero) {
			botonMePlanto.removeAttribute("disabled");
			botonMePlanto.setAttribute("style", "cursor:pointer");
		} else {
			botonMePlanto.setAttribute("disabled", "");
			botonMePlanto.setAttribute("style", "cursor:not-allowed");
		}
	}
};

const checkearSiPuedeSeguirJugando = (puntuacionTotal: number): void => {
	if (puntuacionTotal > 7.5) {
		imprimirMensajePuntuacion(
			"Puntos: " +
				puntuacionTotal +
				". " +
				"¡Has perdido! Te has pasado de 7.5 puntos."
		);
		habilitarBotones(false);
	} else if (puntuacionTotal === 7.5) {
		imprimirMensajePuntuacion(
			"Puntos: " +
				puntuacionTotal +
				". " +
				"¡Lo has clavado! ¡Enhorabuena!"
		);
		habilitarBotones(false);
	} else {
		imprimirMensajePuntuacion("Puntos: " + puntuacionTotal);
		habilitarBotones(true);
	}
};

const ejecutarAccionesBotonDameCarta = (): void => {
	const cartaAletoria = obtenerCartaAleatoria();
	const valorCarta = obtenerValorCartaAleatoria(cartaAletoria);
	actualizarPuntuacionTotal(valorCarta);

	const urlImg = obtenerImagen(cartaAletoria);
	imprimirImagen(urlImg);

	checkearSiPuedeSeguirJugando(puntuacionTotal);
};

const ejecutarAccionesBotonMePlanto = (): void => {
	const mensaje = obtenerMensajeMePlanto(puntuacionTotal);
	imprimirMensajePuntuacion(mensaje);

	habilitarBotones(false);
};

const empezarPartida = (): void => {
	puntuacionTotal = 0;
	const cartaInicial = 0;

	const urlImg = obtenerImagen(cartaInicial);
	imprimirImagen(urlImg);

	imprimirMensajePuntuacion("Puntos: " + puntuacionTotal);

	habilitarBotones(true);
};

document.addEventListener("DOMContentLoaded", empezarPartida);

if (botonReset && botonReset instanceof HTMLButtonElement) {
	botonReset.addEventListener("click", empezarPartida);
}

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
	botonDameCarta.addEventListener("click", ejecutarAccionesBotonDameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
	botonMePlanto.addEventListener("click", ejecutarAccionesBotonMePlanto);
}
