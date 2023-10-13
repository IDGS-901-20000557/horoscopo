import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ selectedCardId }) => {
  const data = [
    {
      signo: "Capricornio",
      fechaInicio: "22 de diciembre",
      fechaFin: "19 de enero",
      texto: "Tu suerte cambiará y hoy es posible que recibas noticias y sorpresas favorables que contribuirán a que cambies de humor en un abrir y cerrar de ojos. Este cambio podría estar relacionado con tu vida sentimental; esa persona que tanto te gusta se pondrá en contacto contigo para invitarte a salir y te olvidarás de todo lo demás.",
      imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png"
    },
    {
      signo: "Acuario",
      fechaInicio: "20 de enero",
      fechaFin: "18 de febrero",
      texto: "Necesitas descansar un poco, Acuario, así que seguramente hoy te apetezca quedarte en casa con la familia. Te sentirás animado-a y querrás cambiar algunos muebles o hacer trabajos domésticos para mejorar tu hogar. Además, en el terreno del amor, pasarás un día excelente.",
      imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png"
    },
    {
      signo: "Piscis",
      fechaInicio: "19 de febrero",
      fechaFin: "20 de marzo",
      texto: "Se pondrán de relieve hoy tus relaciones personales, las de carácter asociativo, las familiares, sentimentales, de amistad... Piscis, ese ámbito de tu vida marchará bien, incluso podría haber llegado el momento de expandirte y de hacer nuevas relaciones, las que más te gusten o interesen; tú eliges.",
      imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png"
    },
    {
      signo: "Aries",
      fechaInicio: "21 de marzo",
      fechaFin: "19 de abril",
      texto: "Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.      ",
      imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png"
    },
    {
        signo: "Tauro",
        fechaInicio: "20 de abril",
        fechaFin: "20 de mayo",
        texto: "Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png"
      },
      {
        signo: "Géminis",
        fechaInicio: "21 de mayo",
        fechaFin: "20 de junio",
        texto: "Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png"
      },
      {
        signo: "Cáncer",
        fechaInicio: "21 de junio",
        fechaFin: "22 de julio",
        texto: "Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png"
      },
      {
        signo: "Leo",
        fechaInicio: "23 de julio",
        fechaFin: "22 de agosto",
        texto: "El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png"
      },
      {
        signo: "Virgo",
        fechaInicio: "23 de agosto",
        fechaFin: "22 de septiembre",
        texto: "Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png"
      },
      {
        signo: "Libra",
        fechaInicio: "23 de septiembre",
        fechaFin: "22 de octubre",
        texto: "Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png"
      },
      {
        signo: "Escorpio",
        fechaInicio: "23 de octubre",
        fechaFin: "21 de noviembre",
        texto: "Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png"
      },
      {
        signo: "Sagitario",
        fechaInicio: "22 de noviembre",
        fechaFin: "21 de diciembre",
        texto: "Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.",
        imagen: "https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.png"
      },
  ];
  // Encuentra la tarjeta correspondiente al ID proporcionado
  const selectedCard = data.find((card, index) => index === selectedCardId);
  if (!selectedCard) {
    // Si no se encuentra ninguna tarjeta con el ID proporcionado, puedes mostrar un mensaje de error o hacer lo que desees
    return <div>No se encontró ninguna tarjeta con el ID proporcionado</div>;
  }
  return (
    <Card
      key={selectedCardId}
      signo={selectedCard.signo}
      fechaInicio={selectedCard.fechaInicio}
      fechaFin={selectedCard.fechaFin}
      texto={selectedCard.texto}
      imagen={selectedCard.imagen}
      id={selectedCardId}
    />
  );
};

Cards.propTypes = {
  selectedCardId: PropTypes.number, // Define la validación para selectedCardId como un número
};
export default Cards;
