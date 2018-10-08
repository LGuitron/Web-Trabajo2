import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import  data from './vehicles.json'; 

declare var require : any; 

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  
  vehicle = new Array<Vehicle>(); 
  json = require('~/src/vehicles.json');
  constructor() { 
    this.vehicle  = new Array<Vehicle>();
    this.vehicle = this.json; 
    //console.log("holi");
    //console.log(this.vehicle); 
    //console.log("holi2");

  }

  ngOnInit() {
  }

}
