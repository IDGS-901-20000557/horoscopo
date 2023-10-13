import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ id, signo, fechaInicio, fechaFin, texto, imagen }) => {
  return (
    <div
      className="card"
      id={`card-${id}`}
    >
      <img src={imagen} alt="random" />
      <h1>{signo}</h1>
      <h3>De: {fechaInicio}</h3>
      <h3>A: {fechaFin}</h3>
      <p>{texto}</p>
    </div>
  );
};

//Definiendo los tipos de datos que se van a recibir (props)
Card.PropTypes = {
    signo: PropTypes.string.isRequired, //isRequired es para que sea obligatorio
    fechaInicio: PropTypes.string, //no es obligatorio
    fechaFin: PropTypes.string,
    texto: PropTypes.string,
    imagen: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Card;
