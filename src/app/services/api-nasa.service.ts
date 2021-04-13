import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../models/Apod';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {
  ENDPOINT_NASA = "https://api.nasa.gov/planetary/apod";
  API_KEY = "Y6oz26AA2TOgVoybySzwoPgYsa0KRi6Z3iTgBySz";

  constructor(private httpCliente: HttpClient) { }

  consultaApod(): Observable<Apod> {
    console.log(this.ENDPOINT_NASA + '?api_key=' + this.API_KEY);
    return this.httpCliente.get<Apod>(this.ENDPOINT_NASA + '?api_key=' + this.API_KEY).pipe(
      map(obj => obj)
    )
  }
}
