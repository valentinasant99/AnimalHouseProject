import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-pensione',
  templateUrl: './pensione.component.html',
  styleUrls: ['./pensione.component.css']
})
export class PensioneComponent implements OnInit{
  public appointmentForm !: FormGroup
  public appointments: any[] = [];
  availableDates = ['','1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30','31'];
  availableMonths = ['','Maggio','Giugno','Luglio','Agosto','Settembre'];

  constructor(private http: HttpClient, public auth: AuthService) {}
  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  ngOnInit() {
    this.appointmentForm = new FormGroup({
      nomeutente: new FormControl(''),
      telefono: new FormControl(''),
      date: new FormControl(''),
      date2: new FormControl(''),
      time: new FormControl('')
    });
    this.getAppointments();
  }
  onSubmit() {
    if (this.appointmentForm.value.nomeutente === '' || this.appointmentForm.value.telefono === '' || this.appointmentForm.value.date === '' || this.appointmentForm.value.month === '' || this.appointmentForm.value.time === ''){
      console.error('Dati mancanti nel form di prenotazione');
      return;
    }
    this.http.post<any>("http://localhost:3000/Pensione", this.appointmentForm.value)
      .subscribe(res => {
        alert("Prenotazione avvenuta con successo");
        this.appointmentForm.reset();
      }, err => {
        alert("Qualcosa è andato storto");
      });
  }
  getAppointments() {
    this.http.get('http://localhost:3000/Pensione')
      .subscribe(response => {
        this.appointments = response as any[];
        console.log('Post recuperati con successo ', this.appointments);
      });
  }
}
