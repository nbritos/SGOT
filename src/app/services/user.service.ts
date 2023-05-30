import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_URI = 'http://localhost:3000/user';

  usuarios: Usuario[];

  constructor(private http: HttpClient) {
    this.usuarios = [{
      "id": 1,
      "nombre": "Pedro",
      "email": "pedro@email.net",
      "password": "123456",
      "rol": 1
    }, {
      "id": 2,
      "nombre": "Juan",
      "email": "juan@email.net",
      "password": "123456",
      "rol": 2
    }, {
      "id": 3,
      "nombre": "Hugo",
      "email": "hugo@email.net",
      "password": "123456",
      "rol": 1
    }, {
      "id": 4,
      "nombre": "Carlos",
      "email": "carlos@email.net",
      "password": "123456",
      "rol": 2
    }, {
      "id": 5,
      "nombre": "Maria",
      "email": "maria@email.net",
      "password": "123456",
      "rol": 2
    }];
  }


  listarUsuarios() {
    //para expandir/especializar las variables usamos ` y no ' o "
    //Las variables salen pintadas de otro color diferente del de texto
    return this.http.get(`${this.API_URI}/list`);
    //si no funciona usar 
    //return this.http.get(this.API_URI+'/list');
  }

  buscarUsuario(id: number) {
    return this.http.get(`${this.API_URI}/find/${id}`);
  }

  guardarUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/add`, usuario);
  }

  actualizarUsuario(id: number, actualizaUsuario: Usuario) {
    return this.http.put(`${this.API_URI}/update/${id}`, actualizaUsuario);
  }

  guardarUsuariosLocal() {
    //Guarda los usuarios del objeto en el LocalStorage
    localStorage.setItem("Usuarios", JSON.stringify(this.usuarios));
  }

  eleminarUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/delete/${id}`);
  }

  loginUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/signin/`, usuario);
  }

  cargarUsuariosLocal() {
    //Carga los usuarios desde el objeto en el LocalStorage
    this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
  }

  setToken(token: string) {
    //localStorage.setItem('token',result.token);
    localStorage.setItem('token', token);
  }

  getToken() {//Obtenemos el token que despues enviara el interceptor x cada req
    return localStorage.getItem('token');
  }

  isLoggedIn(): Boolean {
    return !!localStorage.getItem('token'); //Si existe token retorna true
    //es el equivalente de testearlo con if pero ahora en una sola linea.
  }

  logOut() {
    localStorage.removeItem('token');
  }


  /**/
  esAdmin() {
    return true;
  }
  /**/
}

