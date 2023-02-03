import {Component, OnInit} from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit{
  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router, public authService: AuthService) { }
  ngOnInit():void {
    this.loginForm=this.formBuilder.group({
      nomeutente:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/amministratore")
      .subscribe(res=> {
        const user = res.find((a: any) => {
          return a.nomeutente === this.loginForm.value.nomeutente && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login avvenuto con successo");
          this.loginForm.reset();
          this.authService.login(user);
          this.router.navigate(['/homepageadmin'])
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


