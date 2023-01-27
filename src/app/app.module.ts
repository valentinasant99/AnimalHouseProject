import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PaginavideoComponent } from './paginavideo/paginavideo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent} from "./navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import {InfoComponent} from "./info/component/info.component";
import {CuriositaComponent } from './curiosita/component/curiosita.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiComponent,
    LoginComponent,
    RegistrazioneComponent,
    PaginavideoComponent,
    NavbarComponent,
    InfoComponent,
    CuriositaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FlexLayoutModule
  ],

  exports: [MatToolbarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
