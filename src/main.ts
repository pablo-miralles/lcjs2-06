import {
	botonDameCarta,
	botonMePlanto,
	botonReset,
	empezarPartida,
	ejecutarAccionesBotonDameCarta,
	ejecutarAccionesBotonMePlanto,
} from "./ui";

document.addEventListener("DOMContentLoaded", empezarPartida);

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
	botonDameCarta.addEventListener("click", ejecutarAccionesBotonDameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
	botonMePlanto.addEventListener("click", ejecutarAccionesBotonMePlanto);
}

if (botonReset && botonReset instanceof HTMLButtonElement) {
	botonReset.addEventListener("click", empezarPartida);
}
