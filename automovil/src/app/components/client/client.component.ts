import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Cliente} from '../../models/cliente';
import data from '../../../assets/clientes.json';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

 clientes = new Array<Cliente>();

    whiteStyle =  {
    "color" : "black",
    "background-color" : "white",
    "fompont-size" : "10px",
    "padding" : "20px"
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.route.params.subscribe(params => {
       this.getClient(params.id);
    });
  }


  getClient(id: string) {

       this.clientes = data.clientes;
 
  }

}
