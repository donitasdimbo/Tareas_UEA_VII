let texto = '{"cuerpo" : ["ojos", "boca", "manos", "orejas"],  "piezas" : ["camara", "sensores", "metal", "microfonos"]}';

const info = JSON.parse (texto) ;

document.getElementById("hola").innerHTML = "cuerpo = " + info.cuerpo[1] + " " + info.piezas[1];