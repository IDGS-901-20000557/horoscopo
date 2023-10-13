import "./Form.css";
import Cards from './Cards'
import { useState } from 'react';

const Form = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const obtenerHoroscopo = () => {
    let inputFecha = document.getElementById('birthdate');
    const fecha = inputFecha.value;
    const myArray = fecha.split("-");
    let tarjeta = null;
    switch (Number(myArray[1])) {
      case 12:
        if (Number(myArray[2]) >= 22) {
          //Capricornio
          tarjeta = 0;
        } else if (Number(myArray[2]) <= 21) {
          //Sagitario
          tarjeta = 11;
        }
        break;
      case 1:
        if (Number(myArray[2]) >= 20) {
          //Acuario
          tarjeta = 1;
        } else if (Number(myArray[2]) <= 19) {
          //Capricornio
          tarjeta = 0;
        }
        break;
      case 2:
        if (Number(myArray[2]) >= 19) {
          //Piscis
          tarjeta = 2;
        } else if (Number(myArray[2]) <= 18) {
          //Acuario
          tarjeta = 1;
        }
        break;
      case 3:
        if (Number(myArray[2]) >= 21) {
          //Aries
          tarjeta = 3;
        } else if (Number(myArray[2]) <= 20) {
          //Piscis
          tarjeta = 2;
        }
        break;
      case 4:
        if (Number(myArray[2]) >= 20) {
          //Tauro
          tarjeta = 4;
        } else if (Number(myArray[2]) <= 19) {
          //Aries
          tarjeta = 3;
        }
        break;
      case 5:
        if (Number(myArray[2]) >= 21) {
          //Géminis
          tarjeta = 5;
        } else if (Number(myArray[2]) <= 20) {
          //Tauro
          tarjeta = 4;
        }
        break;
      case 6:
        if (Number(myArray[2]) >= 21) {
          //Cáncer
          tarjeta = 6;
        } else if (Number(myArray[2]) <= 20) {
          //Géminis
          tarjeta = 5;
        }
        break;
      case 7:
        if (Number(myArray[2]) >= 23) {
          //Leo
          tarjeta = 7;
        } else if (Number(myArray[2]) <= 22) {
          //Cáncer
          tarjeta = 6;
        }
        break;
      case 8:
        if (Number(myArray[2]) >= 23) {
          //Virgo
          tarjeta = 8;
        } else if (Number(myArray[2]) <= 22) {
          //Leo
          tarjeta = 9;
        }
        break;
      case 9:
        if (Number(myArray[2]) >= 23) {
          //Libra
          tarjeta = 9;
        } else if (Number(myArray[2]) <= 22) {
          //Virgo
          tarjeta = 8;
        }
        break;
      case 10:
        if (Number(myArray[2]) >= 23) {
          //Escorpio
          tarjeta = 10;
        } else if (Number(myArray[2]) <= 22) {
          //Libra
          tarjeta = 9;
        }
        break;
      case 11:
        if (Number(myArray[2]) >= 22) {
          //Sagitario
          tarjeta = 11;
        } else if (Number(myArray[2]) <= 21) {
          //Escorpio
          tarjeta = 10;
        }
        break;
    }
    setSelectedCardId(tarjeta); // Establece la tarjeta seleccionada en el estado


  };
  return (
    <div className="container">
      <h1>Obtener Horóscopo</h1>
      <div id="horoscopeForm">
        <label htmlFor="birthdate">Fecha de Nacimiento:</label>
        <input type="date" id="birthdate" name="birthdate" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" required />
        <button type="button" onClick={obtenerHoroscopo}>Obtener Horóscopo</button>
      </div>
      <div id="horoscopeResult">
        {selectedCardId !== null && <Cards selectedCardId={selectedCardId} />}
      </div>
    </div>
  );
};

export default Form;
