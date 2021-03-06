import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import data from '../../../assets/vehicles.json';
import { last } from '@angular/router/src/utils/collection';

declare var require : any;

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicles = new Array<Vehicle>();

    whiteStyle =  {
    "color" : "black",
    "background-color" : "white",
    "font-size" : "15px",
    "padding" : "20px"
  };

  yellowStyle =  {
    "color" : "black",
    "background-color" : "yellow",
    "fompont-size" : "10px",
    "padding" : "20px"
  };

    orangeStyle =  {
    "color" : "black",
    "background-color" : "orange",
    "fompont-size" : "10px",
    "padding" : "20px"
  };
    redStyle =  {
    "color" : "black",
    "background-color" : "red",
    "fompont-size" : "10px",
    "padding" : "20px"
  };

  constructor() {
    this.vehicles  = new Array<Vehicle>();
    this.vehicles = data.autos;
  }

  ngOnInit() {
  }

  color(index: number ){
    var difkm = this.vehicles[index].kilometraje - this.vehicles[index].km_ultimo_servicio ; 
    var curDate = new Date(); 
    var lastDate = new Date(this.vehicles[index].fecha_ultimo_servicio);
    var templdM = new Date(lastDate); // 1 month before next service 
    templdM.setMonth(templdM.getMonth() + 5); 
    lastDate.setMonth(lastDate.getMonth()+6); // next service 
    var templd7 = new Date( lastDate);
    templd7.setDate(lastDate.getDate() - 7); 
    

    
    if(difkm >= 10000 || curDate >= lastDate){
      return this.redStyle; 
    }else if(difkm >= 9900 || curDate >= templd7 ){
      return this.orangeStyle;
    }else if(difkm >= 9000 || curDate >= templdM){
      return this.yellowStyle; 
    }
    return this.whiteStyle; 
  }

  /*Todos los automóviles se hace servicio cada 100000 kilometros o cada 6 meses.
   Identifica con un color amarillo los vehículos que están a 1000km o a 1 mes de tener que programar su servicio.
  Identifica con un color naranja en la tabla los vehiculos que están a una semana de programar su servicio o a 
  100 km y los que ya vencieron con un color rojo.*/


  

}
