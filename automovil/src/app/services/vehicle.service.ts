import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  /*
  regresar el mismo json que tenemos 
  getClients(): Observable<Client> {
    return this.http.get(this.endpoint + 'people').pipe(
      map(function(res){
        return <Client> res['results'];
      }));
  }

  getClient(id): Observable<any> {
    return this.http.get(this.endpoint + 'people/' + id).pipe(
      map(function(res){

        return res;
      }));*/
}
