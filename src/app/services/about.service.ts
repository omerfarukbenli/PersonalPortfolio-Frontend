import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {


  url1 = 'https://localhost:7052/api/About/GetAll';
  url2 = 'https://localhost:7052/api/About'
  constructor(private http:HttpClient) { }


  PegarTodos(): Observable<About[]>{
    return this.http.get<About[]>(this.url1);
  }

  PegarPeloId(id:number): Observable<About>{
    const apiUrl = `${this.url2}/${id}`;
    return this.http.get<About>(apiUrl);
  }
}
