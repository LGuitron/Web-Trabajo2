import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service';
import data from '../../../assets/services.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services = new Array<Service>();

    whiteStyle =  {
    "color" : "black",
    "background-color" : "white",
    "fompont-size" : "10px",
    "padding" : "20px"
  };

  constructor() {
    this.services  = new Array<Service>();
    this.services = data.services;
  }

  ngOnInit() {
  }

  getVehicle(id: string) {
    this.services = data.services[id];
  }
}
