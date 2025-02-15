import "./style.css";
import { partida } from "./modelo";
import {
	obtenerImagen,
	obtenerCartaAleatoria,
	obtenerValorCartaAleatoria,
	obtenerMensajeMePlanto,
} from "./motor";

const elementoImagen = document.querySelector(".cards__item-img");
const contenedorMensajePuntuacion = document.querySelector(".puntuacion-total");
export const botonDameCarta = document.querySelector(".dame-carta");
export const botonMePlanto = document.querySelector(".me-planto");
export const botonReset = document.querySelector(".reset");

const imprimirImagen = (urlImagen: string): void => {
	if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
		elementoImagen.src = urlImagen;
	}
};

const imprimirMensajePuntuacion = (mensaje: string): void => {
	if (
		contenedorMensajePuntuacion &&
		contenedorMensajePuntuacion instanceof HTMLDivElement
	) {
		contenedorMensajePuntuacion.innerHTML = mensaje;
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

export const ejecutarAccionesBotonDameCarta = (): void => {
	const cartaAletoria = obtenerCartaAleatoria();
	const valorCarta = obtenerValorCartaAleatoria(cartaAletoria);
	const urlImg = obtenerImagen(cartaAletoria);
	imprimirImagen(urlImg);
	partida.puntuacionTotal += valorCarta;
	checkearSiPuedeSeguirJugando(partida.puntuacionTotal);
};

export const ejecutarAccionesBotonMePlanto = (): void => {
	const mensaje = obtenerMensajeMePlanto(partida.puntuacionTotal);
	imprimirMensajePuntuacion(mensaje);
	habilitarBotones(false);
};

export const empezarPartida = (): void => {
	partida.puntuacionTotal = 0;
	const cartaInicial = 0;
	const urlImg = obtenerImagen(cartaInicial);
	imprimirImagen(urlImg);
	imprimirMensajePuntuacion("Puntos: " + partida.puntuacionTotal);
	habilitarBotones(true);
};
