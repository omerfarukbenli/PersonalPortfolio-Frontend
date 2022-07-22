import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../models/home';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url1 = 'https://localhost:7052/api/Home/GetAll';
  url2 = 'https://localhost:7052/api/Home'

  constructor(private http:HttpClient) { }


  PegarTodos(): Observable<Home[]>{
    return this.http.get<Home[]>(this.url1);
  }

  PegarPeloId(id:number): Observable<Home>{
    const apiUrl = `${this.url2}/${id}`;
    return this.http.get<Home>(apiUrl);
}

}
