import { Category } from "./category"
import { Game } from "./game";

const glamDescription = "El glam metal (también conocido como hair metal o pop metal) es un subgénero musical del heavy metal que combina aspectos sonoros del heavy metal tradicional, hard rock, punk rock y del pop, con la apariencia visual del glam rock...";
const punkDescription = "El punk surge a finales de 1970 en Inglaterra como un movimiento musical y cultural. El nacimiento de este género aparece como una mera rebelión al rock industrial de la época. Sus letras a modo de protesta estaban inspiradas en la independencia, anarquismo, autogestión y ese afán de luchar contra la religión...";
const metalDescription = "El heavy metal (literalmente en español metal pesado) es un género musical que tiene elementos del rock and roll, blues y música clásica. Se caracteriza por ritmos potentes logrados mediante la utilización de guitarras distorsionadas, batería con doble pedal, y bajo pronunciado...";
const classicDescription = "El rock clásico es un formato o clasificación usado en el contexto de la radio y la industria fonográfica estadounidenses, el cual se ha empleado para categorizar artistas de blues rock, hard rock, rock progresivo y soft rock surgidos desde fines de los años 1960 hasta la década de 1980...";

const dixitDesc = `<p> ¡Dixit es un creativo juego de deducción, bellamente ilustrado, donde tu imaginación crea increíbles historias! </p> <p> Más de 1,5 millones de copias vendidas en todo el mundo. </p> <p> 84 cartas con bellas ilustraciones para que los adultos se luzcan con su agudeza y los pequeños sorprendan con su imaginación. </p> <p> El tablero maca la puntuación con las fichas con forma de conejo. Una ficha por jugador de distinto color. Cada turno un cuentacuentos diferente elegirá una de sus cartas y dirá una frase que la identifique. El resto de los jugadores seleccionará de las suyas la que más se asemeje a la frase del turno. Se descubren todas las cartas y se trata de adivinar cuál es la del cuentacuentos. </p> <p> Sobre el tablero un conejo de diferente color por cada jugador. Preparados, listos…empiezas tú si la creatividad te viene innata y además estás inspirado porque seguro que ya tienes en mente la frase para alguna de tus cartas, o para todas, pero es una carta por turno. Serás el primer cuentacuentos de la partida. ¿En qué has pensado: un libro, una película, una canción o acudiste a tu imaginación? La dices en voz alta y todos se concentran para elegir entre sus cartas cuál coincide más con la frase. No lo pongas complicado porque nadie acertará, y será un turno en el que tu conejo no va a puntuar y lo mismo te va a ocurrir si es tan fácil que todos saben qué carta elegiste. </p> <p> Con las cartas de tus adversarios sobre la mesa, ahora viene lo mejor: tienen que adivinar cuál es tu carta. Parecen tranquilos, no se inquietan y, sin embargo, no es ilusión la viñeta pensativa que ves sobre sus cabezas: ¡podría ser cualquiera! ¡descarto la 2! ¡seguro es la 5! ¡Puf, ninguna carta describe la frase! ¿la 3 ó la 5? Tiene pinta de que dos de tus contrincantes la pueden averiguar… Si dos jugadores de cinco han adivinado tu carta, no está mal para empezar. </p>`;
const azulDesc = `<p> Azul invita a los artistas del azulejo a embellecer las paredes del Palacio Real de Évora. </p> <p> Cuando Manuel I el Afortunado, rey de Portugal, visitó el Palacio de la Alhambra, quedó cautivado por la imponente belleza de la decoración, formada por losetas de cerámica de procedencia árabe a las que llamaban “azulejos”. Aún fascinado por el esplendor del interior de la Alhambra, a su regreso a Portugal ordenó inmediatamente que las paredes de su palacio en Évora fueran decoradas del mismo modo. </p> <p> ¡Elige con cuidado tu estrategia para convertirte en el artista preferido del rey! </p>`;

export const CATEGORIES = [
    new Category(1, "Punk", "/images/catbg.jpg", punkDescription),
    new Category(2, "Metal", "/images/catbg.jpg", metalDescription),
    new Category(3, "Glam", "/images/catbg.jpg", glamDescription),
    new Category(4, "Classic", "/images/catbg.jpg", classicDescription),
];


export const GAMES = [
    new Game(1, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[0], 25990),
    new Game(2, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[0], 31990),
    new Game(3, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[0], 25990),
    new Game(4, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[0], 31990),

    new Game(5, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[1], 25990),
    new Game(6, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[1], 31990),
    new Game(7, "Dixit", "/images/games/dixit.png", azulDesc, CATEGORIES[1], 25990),
    new Game(8, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[1], 31990),

    new Game(9, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[2], 25990),
    new Game(10, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[2], 31990),
    new Game(11, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[2], 25990),
    new Game(12, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[2], 31990),

    new Game(13, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[3], 25990),
    new Game(14, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[3], 31990),
    new Game(15, "Dixit", "/images/games/dixit.png", dixitDesc, CATEGORIES[3], 25990),
    new Game(16, "Azul", "/images/games/azul.png", azulDesc, CATEGORIES[3], 31990),
];



