import {Component, OnInit} from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AuthService } from '../services/auth.service';
import {userdtoModels} from "../dto/userdto.models";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router, public authService: AuthService ) { }
  ngOnInit():void {
    this.loginForm=this.formBuilder.group({
      nomeutente:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res=> {
        let user = new userdtoModels();  //creazione di un nuovo utente per la sessione
           user = res.find((a: any) => {
          return a.nomeutente === this.loginForm.value.nomeutente && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login avvenuto con successo");
          this.loginForm.reset();
          this.router.navigate(['homepageutente'])
          this.authService.login(user);
        } else {
          alert("Nome utente non trovato");
        }
      }, err =>{
        alert("Qualcosa è andato storto")
      })
  }
  user() {
    return this.authService.userData?.nomeutente;
  }
}





