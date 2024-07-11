export default class Cl_Numero {
    constructor(numero) {
    this.numero = numero; 
    }
    set numero (n){
        this._numero = n;
    }
    get numero(){ 
        return this._numero;
    }
    clasificacion(){
        if (this.numero % 2 ==0) { 
            return "Par";
            }
            else
                return "Impar"; }
        }
