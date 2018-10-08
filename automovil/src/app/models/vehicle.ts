export class Vehicle {
    placas: string;
    marca: string;
    submarca: string;
    kilometraje:number;
    fecha_ultimo_servicio:Date;
    km_ultimo_servicio:number;
  
    constructor(placa: string, marca : string, submarca: string, kilometraje 
      ,fecha_ultimo_servicio: Date, km_ultimo_servicio: number){
        this.placas = placa; 
        this.marca = marca; 
        this.submarca = submarca; 
        this.kilometraje = kilometraje; 
        this.fecha_ultimo_servicio = fecha_ultimo_servicio; 
        this.km_ultimo_servicio = km_ultimo_servicio; 
    }

  }