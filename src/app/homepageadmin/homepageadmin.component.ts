import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-homepageadmin',
  templateUrl: './homepageadmin.component.html',
  styleUrls: ['./homepageadmin.component.css']
})

export class HomepageadminComponent implements OnInit {
  nomeutente: any[] = [];
  email: string = " ";
  password: string = " ";
  punteggio: string = " ";
  selectedOption: any;
  emailInserita: string = " ";
  passwordInserita: string = " ";
  nomeutenteInserito: string = " ";
  punteggioInserito: string = "";
  animaliInseriti: any;
  id: string = "";
  modificheInserite: any = " ";
  preferenza: any;

  constructor(private httpclient: HttpClient, public authService: AuthService, private router: Router) { }
  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }


  user() {
    return this.authService.userData?.nomeutente;
  }


  ngOnInit(): void {
    this.httpclient.get<any>("http://localhost:3000/signUpUsers").subscribe(res => {
      //console.log(res)
      for (let index = 0; index < res.length; index++) {
        this.nomeutente[index] = res[index].nomeutente;
      }
    });
  }



  getValori() {
    console.log(this.selectedOption);
    this.httpclient.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        let user = res.find((a: any) => {
          return a.nomeutente == this.selectedOption;
        });
        if (user) {
          this.id = user.id;
          this.email = user.email;
          this.password = user.password
          this.punteggio = user.punteggio;
          this.preferenza = user.animale;
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong");
      })
  }



  salvaModifiche() {
    this.emailInserita = (<HTMLInputElement>document.getElementById('email')).value;
    this.passwordInserita = (<HTMLInputElement>document.getElementById('password')).value;
    this.nomeutenteInserito = (<HTMLInputElement>document.getElementById('username')).value;
    this.punteggioInserito = (<HTMLInputElement>document.getElementById('punteggio')).value;
    this.animaliInseriti = (<HTMLInputElement>document.getElementById('animali')).value;
    this.modificheInserite = {
      nomeutente: this.nomeutenteInserito, email: this.emailInserita, password: this.passwordInserita, punteggio: this.punteggioInserito, animale: this.animaliInseriti
    };
    this.httpclient.put<any>("http://localhost:3000/signUpUsers/" + this.id, this.modificheInserite)
      .subscribe(
      )
    alert("Modificato con successo!")
  }


  cancellaAccount() {
    let header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.httpclient.delete<any>("http://localhost:3000/signUpUsers/" + this.id, header)
      .subscribe(
      )
    alert("Account Eliminato!");
    location.reload();
  }
}


