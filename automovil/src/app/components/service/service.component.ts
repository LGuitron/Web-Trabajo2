import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
       this.getVehicle(params.id);
    });

  }

  getVehicle(id: string) {

    // Get all services
    if(id=="all")
    {
       this.services = data.services;
    }

    // Get services for specific vehicle
    else
    {
      this.services = data.services.filter(obj => {
        return obj.placa === id
      })
    }
  }
}
