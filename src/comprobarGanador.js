import uno from "./images/facil/image_part_001.png";
import dos from "./images/facil/image_part_002.png";
import tres from "./images/facil/image_part_003.png";
import cuatro from "./images/facil/image_part_004.png";
import cinco from "./images/facil/image_part_005.png";
import seis from "./images/facil/image_part_006.png";
import siete from "./images/facil/image_part_007.png";
import ocho from "./images/facil/image_part_008.png";
import trece from "./images/moderado/image_part_001.jpg";
import catorce from "./images/moderado/image_part_002.jpg";
import quince from "./images/moderado/image_part_003.jpg";
import dieciseis from "./images/moderado/image_part_004.jpg";
import diecisiete from "./images/moderado/image_part_005.jpg";
import dieciocho from "./images/moderado/image_part_006.jpg";
import diecinueve from "./images/moderado/image_part_007.jpg";
import veinte from "./images/moderado/image_part_008.jpg";
import veintiuno from "./images/moderado/image_part_009.jpg";
import veintidos from "./images/moderado/image_part_010.jpg";
import veintitres from "./images/moderado/image_part_011.jpg";
import veinticuatro from "./images/moderado/image_part_012.jpg";
import veintinueve from "./images/dificil/image_part_001.jpg";
import treinta from "./images/dificil/image_part_002.jpg";
import treintauno from "./images/dificil/image_part_003.jpg";
import treintados from "./images/dificil/image_part_004.jpg";
import treintacuatro from "./images/dificil/image_part_005.jpg";
import treintacinco from "./images/dificil/image_part_006.jpg";
import treintaseis from "./images/dificil/image_part_007.jpg";
import treintasiete from "./images/dificil/image_part_008.jpg";
import treintaocho from "./images/dificil/image_part_009.jpg";
import trientanueve from "./images/dificil/image_part_010.jpg";
import forty from "./images/dificil/image_part_011.jpg";
import fortyone from "./images/dificil/image_part_012.jpg";
import fortytwo from "./images/dificil/image_part_013.jpg";
import fortythree from "./images/dificil/image_part_014.jpg";
import fortyfour from "./images/dificil/image_part_015.jpg";
import fortysix from "./images/dificil/image_part_016.jpg";

const imgGanadoraFacil = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];
const imgGanadoraMedio = [
  trece,
  catorce,
  quince,
  dieciseis,
  diecisiete,
  dieciocho,
  diecinueve,
  veinte,
  veintiuno,
  veintidos,
  veintitres,
  veinticuatro,
];
const imgGanadoraDificil = [
  veintinueve,
  treinta,
  treintauno,
  treintados,
  treintacuatro,
  treintacinco,
  treintaseis,
  treintasiete,
  treintaocho,
  trientanueve,
  forty,
  fortyone,
  fortytwo,
  fortythree,
  fortyfour,
  fortysix,
];

export function comprobarGanador(imgActual, cant) {
  let imgGanadora;
  switch (cant) {
    case 8:
      imgGanadora = imgGanadoraFacil;
      break;
    case 12:
      imgGanadora = imgGanadoraMedio;
      break;
    case 16:
      imgGanadora = imgGanadoraDificil;
      break;
    default:
      return;
  }
  if (JSON.stringify(imgActual) === JSON.stringify(imgGanadora)) {
    return true;
  }
  return false;
}
