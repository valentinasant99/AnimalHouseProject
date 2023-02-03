import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-educazione',
  templateUrl: './educazione.component.html',
  styleUrls: ['./educazione.component.css']
})
export class EducazioneComponent implements OnInit{
  public appointmentForm !: FormGroup
  availableDates = ['','1', '2', '3', '4', '5','6','7','8','9','16','17','18','19','20', '21','22','23','24','25','26'];
  availableMonths = ['','Gennaio','Marzo','Maggio','Luglio','Settembre','Novembre'];
  availableTimes = ['', '17:00', '18:00', '19:00'];

  constructor(private http: HttpClient) {}
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
    this.http.post<any>("http://localhost:3000/Educazione", this.appointmentForm.value)
      .subscribe(res=>{
        alert("Prenotazione avvenuta con successo");
        this.appointmentForm.reset();
      }, err=>{
        alert("Qualcosa è andato storto");
      });
  }
}

