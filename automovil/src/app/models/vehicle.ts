export class Vehicle {
    placas: string;
    marca: string;
    submarca: string;
    kilometraje:number;
    fecha_ultimo_servicio:string;
    km_ultimo_servicio:number;
  
  
    constructor( name: string, gender: string, url: string) {
  
      this.name = name;
      this.gender = gender;
      this.url = url;
    }
  
    getId(): string{
      return this.url.replace('https://swapi.co/api/people/', '').replace('/', '');
    }
  }