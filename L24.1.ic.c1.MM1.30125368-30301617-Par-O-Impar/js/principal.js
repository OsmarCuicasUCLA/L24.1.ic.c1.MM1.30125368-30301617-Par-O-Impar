/**Se debe crear un programa que muestre un numero entero como entrada
y verifique si es par o impar. debe mostrar el numero y la consificacion
*/

import Cl_Numero from "./Cl_Numero.js";
import Cl_INumero from "./Cl_INumero.js";

let iNumb = new Cl_INumero(),
    n = iNumb.leerNumero(),
    nb = iNumb.reporteNumber(),

    numb = new Cl_Numero(n),

    salida = document.getElementById ("salida");
    salida.innerHTML = iNumb.reporteNumber(numb.numero, numb.clasificacion());