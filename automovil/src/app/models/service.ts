export class Service {
    id: number;
    fecha: Date;
    costo: number;
    placa: number;
    encargado: string;
    notas: string;

    constructor(id : number, fecha : Date, costo : number, placa : number, encargado : string, notas : string ){
        this.id        = id;
        this.fecha     = fecha;
        this.costo     = costo;
        this.placa     = placa;
        this.encargado = encargado;
        this.notas     = notas;
    }

  }
