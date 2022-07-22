import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from '../models/repo';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  url1 = 'https://localhost:7052/api/Repo/GetAll';
  url2 = 'https://localhost:7052/api/Repo'
  constructor(private http:HttpClient) { }


  PegarTodos(): Observable<Repo[]>{
    return this.http.get<Repo[]>(this.url1);
  }

  PegarPeloId(id:number): Observable<Repo>{
    const apiUrl = `${this.url2}/${id}`;
    return this.http.get<Repo>(apiUrl);
}
}
