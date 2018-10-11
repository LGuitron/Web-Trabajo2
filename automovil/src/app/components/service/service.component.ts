import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import data from '../../../assets/vehicles.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

  getVehicle(placa: string) {
    this.vehicle = data.autos;
  }

}
