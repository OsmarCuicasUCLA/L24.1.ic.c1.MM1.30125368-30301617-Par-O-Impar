export default class Cl_INumero {
    leerNumero(){
        return prompt("ingrese numero");
    }
    
    
    reporteNumber(n,c){
        return `
        <br> Numero: ${n}
        <br> Clasificacion: ${c}
        `
    }
}