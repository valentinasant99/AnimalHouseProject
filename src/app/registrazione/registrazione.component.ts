import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  RegistrazioneForm = new FormGroup({
    nomeutente: new FormControl(''),
    animale: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit() {
    console.log(this.RegistrazioneForm.value);
  }
}
