import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  domande: any[] = [];
  risposte: any[] = [];
  selectedOption: any[] = [];
  punteggio: number=0;
  rispUtente: any[] = [];
  punteggioDB: any;
  nomeutente: any;
  password: any;
  clicked = false;


  constructor(private httpclient: HttpClient , public authService: AuthService) { }

  ngOnInit(): void {
  }

  //lettura domande da  random api, parametri impostati categoria true false e numero domande
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


  //confronta la risposta dell'utente con quella corretta e assegna il punteggio all'utente se loggato
  controllaRisposte() {
    for (let i = 0; i < this.risposte.length; i++) {
      if (this.selectedOption[this.domande[i]] == this.risposte[i]) {
        this.punteggio = this.punteggio + 10;
      }else {
        this.punteggio = this.punteggio + 0;
      }
      }
    this.punteggioDB = { punteggio: this.punteggio.toString() }
    if (this.authService.isLoggedIn()) {
      this.getPunteggio();
    } else {
      alert("Per salvare il tuo punteggio devi effettuare il login");
    }
  }



  //con la get salviamo il punteggio dell'utente
  getPunteggio() {
    this.httpclient.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        let user = res.find((a: any) => {
          this.nomeutente = this.authService.userData?.nomeutente;
          this.password = this.authService.userData?.password;
          return a.nomeutente === this.nomeutente && a.password === this.password;
        });
        if (user) {
          let variabile = user.id;
          let header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.httpclient.patch<any>("http://localhost:3000/signUpUsers" + "/" + variabile, this.punteggioDB , header)
            .subscribe(
            )
        } else {
          alert("Utente non trovato")
        }
      }, err => {
        alert("Qualcosa è andato storto");
      })
  }


  //resetta il quiz cliccando sul bottone gioca
  azzeraQuiz() {
    this.getQuiz();
    for (let i = 0; i < this.domande.length; i++) {
      this.selectedOption[this.domande[i]] = "";
      this.punteggioDB = 0;
    }
  }

}
