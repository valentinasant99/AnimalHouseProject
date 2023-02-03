import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  domande: any[] = [];
  risposte: any[] = [];
  selectedOption: any[] = [];
  punteggio: number = 0;
  rispUtente: any[] = [];
  punteggioDB: any;
  nomeutente: any;
  password: any;
  clicked = false;
  disabilita = false;


  constructor(private httpclient: HttpClient /* , public authService: AuthService*/) { }

/*  //disabilita i pulsanti se non sei loggato
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.disabilita = true;
    }
    this.getQuiz();
  }*/


  //lettura domande da  random api; parametri impostati: categoria e numero domande
  getQuiz() {
    this.httpclient.get<any>("https://opentdb.com/api.php?amount=10&category=27&type=boolean").subscribe
    (
      data => {
        for (let index = 0; index < data.results.length; index++) {
          //console.log(data.results[index].question);
          this.domande[index] = data.results[index].question;
          this.risposte[index] = data.results[index].correct_answer;
        }
      }
    );
  }


  //confronta la risposta dell'utente con quella corretta e assegna il punteggio
  controllaRisposte() {
    //  alert("Hai già giocato");
    for (let i = 0; i < this.risposte.length; i++) {
      //console.log("selected option: " + this.selectedOption[this.domande[i]]);
      //console.log("risposta: " + this.risposte[i]);
      if (this.selectedOption[this.domande[i]] == this.risposte[i]) {
        this.punteggio = this.punteggio + 10;
      }else {
        this.punteggio = this.punteggio + 0;
      }
          //console.log(this.punteggio);
      }
    this.punteggioDB = { punteggio: this.punteggio.toString() }
/*    if (this.AuthService.isLoggedIn()) {
      this.getPunteggio();
    } else {
      alert("Per salvare il tuo punteggio devi effettuare il login");
    }*/
  }



//  con la get prendiamo l'utente che sta giocando con la patch invece aggiorniamo il suo punteggio
/*  getPunteggio() {
    this.httpclient.get<any>("http://localhost:3000/signupUsersList")
      .subscribe(res => {
        let user = res.find((a: any) => {
          this.nomeutente = this.authService.userData?.email;
          this.password = this.authService.userData?.password;
          return a.email === this.nomeutente && a.password === this.password;
        });
        if (user) {
          let variabile = user.id;
          //console.log(variabile);
          let header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.httpclient.patch<any>("http://localhost:3000/signUpUsersList" + "/" + variabile, this.punteggioDB, header)
            .subscribe(
            )
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong");
      })
  }*/


  //resettiamo le caselle per ricominciare a giocare
  azzeraQuiz() {
    this.getQuiz();
    for (let i = 0; i < this.domande.length; i++) {
      this.selectedOption[this.domande[i]] = "";
      //console.log("Test2" +this.selectedOption[this.domande[i]]);
      this.punteggio = 0;
    }
  }

  ngOnInit(): void {
  }
}
