import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRol } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})

export class RolService {
  API_URI = 'http://localhost:3000/roles';

  roles: IRol[] = [];

  constructor(private http: HttpClient) {
  }


  listarRoles() {
    
    // return this.http.get(`${this.API_URI}/list`);
    //si no funciona usar 
    return this.http.get(this.API_URI+'/list');
  }

  buscarRol(id: number) {
    return this.http.get(`${this.API_URI}/find/${id}`);
  }
}

