import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//Servicio para obtener historial de servicios de los vehículos//

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }
}