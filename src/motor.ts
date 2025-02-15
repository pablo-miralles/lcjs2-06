export const obtenerImagen = (carta: number): string => {
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

export const obtenerCartaAleatoria = (): number => {
	let randomNum = Math.floor(Math.random() * 10);
	let cartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

	return cartas[randomNum];
};

export const obtenerValorCartaAleatoria = (carta: number): number => {
	if (carta > 7) {
		return 0.5;
	}

	return carta;
};

export const obtenerMensajeMePlanto = (puntuacionTotal: number): string => {
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
