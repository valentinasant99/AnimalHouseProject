import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent {
  appointment = {
    date: '',
    time: '',
    name: '',
    animal: '',
    phone: '',
  };

  constructor(private http: HttpClient) {}

  bookAppointment() {
    this.http.post('/api/appointments', this.appointment)
      .subscribe(res => {
        this.appointment = {
          date: '',
          time: '',
          name: '',
          animal: '',
          phone: ''
        };
      });
  }
}
