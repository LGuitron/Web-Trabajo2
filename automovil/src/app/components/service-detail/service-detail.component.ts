import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Service} from '../../models/service';
import data from '../../../assets/services.json';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  service : Service;


  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.getService(params.id);
    });
  }

  getService(id: string) {
    this.service = data.services.filter(obj => {
      return obj.id == id
    })
  }
}
