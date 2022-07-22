import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  url1 = 'https://localhost:7052/api/Contact/GetAll';
  url2 = 'https://localhost:7052/api/Contact'
  constructor(private http:HttpClient) { }


  PegarTodos(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url1);
  }

  PegarPeloId(id:number): Observable<Contact>{
    const apiUrl = `${this.url2}/${id}`;
    return this.http.get<Contact>(apiUrl);
  }
}
