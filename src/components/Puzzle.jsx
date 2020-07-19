import React, { useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import shortid from "shortid";
import "./puzzle.css";
import logoclick from "./../images/click.jpg";
import imagen1 from "./../images/1.jpg";
import imagen2 from "./../images/2.jpg";
import imagen3 from "./../images/3.jpg";
import imagen4 from "./../images/4.jpg";
import imagen5 from "./../images/5.jpg";
import imagen6 from "./../images/6.jpg";
import imagen7 from "./../images/7.jpg";
import imagen8 from "./../images/8.jpg";
import negro from "./../images/negro.jpg";

const doc = new GoogleSpreadsheet(
  "1BjjFhdayN24Fi7hV_0dUZK4GwW7JSTtmqpNXtDYV20Y"
);
//Funcion que agrega el prompt al stylesheet
const appendSpreadsheet = async (row) => {
  try {
    console.log("entra aca");
    await doc.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[1202433785];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};

const Puzzle = ({
  seleccion1,
  seleccion2,
  setSeleccion1,
  setSeleccion2,
  imagenes,
  setImagenes,
}) => {
  //Estados
  const [clickovich, setClickovich] = useState(false);

  const [contador, setContador] = useState(0);
  const imgs = [
    imagen3,
    imagen7,
    imagen5,
    imagen2,
    imagen4,
    imagen6,
    imagen8,
    imagen1,
    imagen5,
  ];
  const handleClick = () => {
    if (seleccion1 !== "" && seleccion2 !== "") {
    }
    //Valida cuando llega a 8 para.
    if (imagenes.length === 8) {
      setClickovich(true);
      return;
    }
    //MANDA DATOS A LA STYLESHEET COMENTADO POR AHORA
    // const newRow = prompt("La pregunta va aca");

    // appendSpreadsheet({ Respuesta: newRow });
    // setTimeout(() => {
    //   console.log("tu mama gusta de mi");
    // }, 2200);
    //se agregan las imagenes al hacer click
    setContador(contador + 1);
    setImagenes([...imagenes, imgs[contador]]);
  };
  //Click para mover las piezas
  const handleClick2 = (e) => {
    //Actualiza el state al primer y segundo click
    if (seleccion1 === "") {
      setSeleccion1(e.target.src);
    }
    if (seleccion1 === e.target.src) {
      setSeleccion1(e.target.src);
    }
    if (seleccion1 !== "" && seleccion2 === "" && seleccion1 !== seleccion2) {
      setSeleccion2(e.target.src);
    }
  };
  const toggleClass = (e) => {
    e.target.classList.toggle("active");
  };
  return (
    <div id="Contenedor">
      {imagenes.map((imagen) => (
        <img
          key={imagen}
          id="Imagen"
          onClick={(e) => {
            handleClick2(e);
            toggleClass(e);
          }}
          src={imagen}
          alt="pieza"
        />
      ))}
      {clickovich ? (
        <img
          id="Imagen"
          key={shortid.generate()}
          onClick={handleClick2}
          src={negro}
          alt="Imagen negra"
        />
      ) : (
        <img
          id="Imagen"
          onClick={handleClick}
          src={logoclick}
          alt="Boton click"
        />
      )}
    </div>
  );
};
export default Puzzle;
