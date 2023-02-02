import { Injectable } from '@angular/core';
import {userdtoModels} from "../dto/userdto.models";


export const AUTH_TOKEN_KEY = 'auth-token';
export const AUTH_USER_DATA = 'user-data '

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public authToken: string | null = null;
  public userData: userdtoModels | null = null;


  constructor() {
    this.checkStorage();
  }

  //salviamo dati sessione
  checkStorage() {
    const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
    const userData = sessionStorage.getItem(AUTH_USER_DATA);
    this.authToken = authToken;
    if (userData) {
      this.userData = JSON.parse(userData) as any;
    } else {
      this.userData = null;
    }
  }


  login(authData: userdtoModels) {
    sessionStorage.setItem(AUTH_TOKEN_KEY, authData.nomeutente + 'RANDOM_STRING');
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData));
    this.checkStorage();
  }


  public isLoggedIn() {
    return this.authToken !== null;
  }

  public logout() {
    if (!this.isLoggedIn()) {
      return;
    }
    sessionStorage.clear();
    this.checkStorage();
  }
}
