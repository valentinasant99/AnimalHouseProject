import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaginavideoComponent } from './paginavideo/component/paginavideo.component';
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
import {CuriositaComponent} from "./curiosita/component/curiosita.component";
import {HomepageutenteComponent } from './homepageutente/homepageutente.component';
import {ServizipresenzaComponent} from "./servizipresenza/component/servizipresenza.component";
import {VeterinarioComponent} from "./veterinario/veterinario.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {QuizComponent} from "./quiz/quiz.component";
import {PensioneComponent} from "./pensione/pensione.component";
import {TaxiComponent} from "./taxi/taxi.component";
import {DogsitterComponent} from "./dogsitter/dogsitter.component";
import {EducazioneComponent} from "./educazione/educazione.component";
import {ToelettaturaComponent} from "./toelettatura/toelettatura.component";
import {LoginadminComponent } from './loginadmin/loginadmin.component';
import {HomepageadminComponent} from "./homepageadmin/homepageadmin.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {BachecaadminComponent} from "./bachecaadmin/bachecaadmin.component";

@NgModule({
  declarations: [
    AppComponent,
    ContattiComponent,
    LoginComponent,
    SignupComponent,
    PaginavideoComponent,
    NavbarComponent,
    InfoComponent,
    CuriositaComponent,
    HomepageutenteComponent,
    QuizComponent,
    ServizipresenzaComponent,
    VeterinarioComponent,
    LeaderboardComponent,
    PensioneComponent,
    TaxiComponent,
    DogsitterComponent,
    EducazioneComponent,
    ToelettaturaComponent,
    LoginadminComponent,
    HomepageadminComponent,
    HomepageComponent,
    BachecaadminComponent
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
