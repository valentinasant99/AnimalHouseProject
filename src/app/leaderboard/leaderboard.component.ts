import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {
  giocatore: any[] = [];
  constructor(private httpclient: HttpClient, public authService: AuthService, private router: Router) { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {
  this.score();
}
score() {
  this.httpclient.get<any>("http://localhost:3000/signUpUsers").subscribe(res => {
    //console.log(res)
    for (let i = 0; i < res.length; i++) {
      this.giocatore[i] = res[i];
    }
    this.giocatore.sort((a, b) => {
        return b.punteggio - a.punteggio
      }
    );
  });
}
}
