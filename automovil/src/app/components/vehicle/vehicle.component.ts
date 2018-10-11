import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../models/vehicle';

import data from '../../../assets/vehicles.json';

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

}
