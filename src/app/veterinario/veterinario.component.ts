import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  public appointmentForm !: FormGroup
  availableDates = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  availableMonths = ['', 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  availableTimes = ['', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  constructor(private http: HttpClient, public authService: AuthService) {
  }

  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }


  ngOnInit() {
    this.appointmentForm = new FormGroup({
      nomeutente: new FormControl(''),
      telefono: new FormControl(''),
      date: new FormControl(''),
      month: new FormControl(''),
      time: new FormControl('')
    });
  }

  onSubmit() {
    if (this.appointmentForm.value.nomeutente === '' && this.appointmentForm.value.telefono === '' && this.appointmentForm.value.date === '' && this.appointmentForm.value.month === '' && this.appointmentForm.value.time === ''){
      console.error('Dati mancanti nel form di prenotazione');
      return;
    }
    this.http.post<any>("http://localhost:3000/Dogsitter", this.appointmentForm.value)
      .subscribe(res => {
        alert("Prenotazione avvenuta con successo");
        this.appointmentForm.reset();
      }, err => {
        alert("Qualcosa è andato storto");
      });
  }
}
