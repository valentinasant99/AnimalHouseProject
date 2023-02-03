import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pensione',
  templateUrl: './pensione.component.html',
  styleUrls: ['./pensione.component.css']
})
export class PensioneComponent implements OnInit{
  public appointmentForm !: FormGroup
  availableDates = ['','1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30','31'];
  availableMonths = ['','Maggio','Giugno','Luglio','Agosto','Settembre'];

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
      date2: new FormControl(''),
      time: new FormControl('')
    });
  }
  onSubmit() {
    this.http.post<any>("http://localhost:3000/Pensione", this.appointmentForm.value)
      .subscribe(res=>{
        alert("Prenotazione avvenuta con successo");
        this.appointmentForm.reset();
      }, err=>{
        alert("Qualcosa è andato storto");
      })
  }
}

