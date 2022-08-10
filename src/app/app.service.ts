import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080/proyectos';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(API_BASE)
  }

  create(proyecto: any){
    return this.http.post(API_BASE, proyecto);
  }

  update(id: string, proyecto: any){
    return this.http.put(API_BASE + '/' + id, proyecto);
  }

  delete(id: string, proyecto: any){
    return this.http.delete(API_BASE + '/' + id);
  }

}


