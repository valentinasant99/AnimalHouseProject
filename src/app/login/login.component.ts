import {Component, OnInit} from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router) { }
  ngOnInit():void {
    this.loginForm=this.formBuilder.group({
      nomeutente:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
      .subscribe(res=> {
        const user = res.find((a: any) => {
          return a.nomeutente === this.loginForm.value.nomeutente && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login avvenuto con successo");
          this.loginForm.reset();
          this.router.navigate(['homepageutente'])
        } else {
          alert("Nome utente non trovato");
        }
      }, err =>{
        alert("Qualcosa è andato storto")
      })
  }
}
