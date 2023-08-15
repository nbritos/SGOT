import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_URI = 'http://localhost:3000/usuario';

  usuarios: IUser[];

  constructor(private http: HttpClient) {
    this.usuarios = [];
  }

  // listarUsuarios() {
  //   return this.http.get(`${this.API_URI}/list`);
  // }

  // buscarUsuario(id: number) {
  //   return this.http.get(`${this.API_URI}/find/${id}`);
  // }

  // guardarUsuario(usuario: IUser) {
  //   return this.http.post(`${this.API_URI}/add`, usuario).subscribe(
  //     (res: any) => {
  //       console.log('si no existe agrega', res);
  //     },
  //     (error: any) => {
  //       console.error('error al agregar la provincia', error);
  //     }
  //   );
  // }

  // actualizarUsuario(id: number, actualizaUsuario: IUser) {
  //   return this.http.put(`${this.API_URI}/update/${id}`, actualizaUsuario);
  // }

  // guardarUsuariosLocal() {
  //   //Guarda los usuarios del objeto en el LocalStorage
  //   localStorage.setItem("Usuarios", JSON.stringify(this.usuarios));
  // }

  // eliminarUsuario(id: string) {
  //   return this.http.delete(`${this.API_URI}/delete/${id}`);
  // }

  // loginUsuario(nombre : string, password : string) {
  //   let usuario: IUser = {nombre, password};
  //   return this.http.post(`${this.API_URI}/login/`, usuario);
  // }

  // setId(id:string) {
  //   localStorage.setItem('id', id);
  // }

  // cargarUsuariosLocal() {
  //   //Carga los usuarios desde el objeto en el LocalStorage
  //   this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
  // }

  // setToken(token: string) {
  //   //localStorage.setItem('token',result.token);
  //   localStorage.setItem('token', token);
  // }

  // getToken() {//Obtenemos el token que despues enviara el interceptor x cada req
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn(): Boolean {
  //   return !!localStorage.getItem('token'); //Si existe token retorna true
  //   //es el equivalente de testearlo con if pero ahora en una sola linea.
  // }

  // logOut() {
  //   localStorage.removeItem('token');
  // }

  // /**/
  // userAdmin(): boolean {
  //   if (localStorage["rol"] == 'admin') {
  //     return true;
  //   }
  //   return false;
  // }

  // userUser(): boolean {
  //   if (localStorage["rol"] == 'tecnico') {
  //     return true;
  //   }
  //   return false;
  // }
  // /**/

  listarUsuarios() {
    //para expandir/especializar las variables usamos ` y no ' o "
    //Las variables salen pintadas de otro color diferente del de texto
    return this.http.get(`${this.API_URI}/list`);
    //si no funciona usar
    //return this.http.get(this.API_URI+'/list')
    //return this.usuarios;
  }

  buscarUsuario(id: string) {
    return this.http.get(`${this.API_URI}/find/${id}`);
  }

  guardarUsuario(usuario: IUser) {
    return this.http.post(`${this.API_URI}/add`, usuario);
  }

  actualizarUsuario(id: string, actualizaUsuario: IUser) {
    return this.http.put(`${this.API_URI}/update/${id}`, actualizaUsuario);
  }

  eliminarUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/delete/${id}`);
  }

  // loginUsuario(nombre : string, password : string){
  //   let usuario: IUser = {nombre, password};
  //   return this.http.post(`${this.API_URI}/login/`, usuario);
  // }

  loginUsuario(usuario: IUser) {
    return this.http.post(`${this.API_URI}/login/`, usuario);
  }

  cargarUsuariosLocal() {
    //Carga los usuarios desde el objeto en el LocalStorage
    this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setId(id: string) {
    localStorage.setItem('id', id);
  }

  getToken() {//Obtenemos el token que despues enviara el interceptor x cada req
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }

  isLoggedIn(): Boolean {
    return !!localStorage.getItem('token'); //Si existe token retorna true
    //es el equivalente de testearlo con if pero ahora en una sola linea.
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  // setRol(usuario : IUser){
  //   localStorage.setItem('rol', usuario.rol!);
  // }

  getRol() {
    return this.http.get(`${this.API_URI}/getRolCurrentUser/${this.getId()}/`);
  }

  validarEmail(email: string): boolean {
    const usuario = this.usuarios.find(u => u.email == email)
    if (usuario) {
      return true
    }
    else {
      return false
    }
  }
  /****VER ESTO******/
  userAdmin(): boolean {

    if (localStorage["rol"] == 'admin') {
      return true;
    }
    return false;
  }

  userUser(): boolean {
    if (localStorage["rol"] == 'tecnico') {
      return true;
    }
    return false;
  }

  /******************/
}

