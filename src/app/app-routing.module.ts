import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent} from './contatti/contatti.component';
import { HomepageComponent} from './homepage/homepage.component';
import { InfoComponent} from './info/component/info.component';
import { LoginComponent} from './login/login.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PaginavideoComponent} from './paginavideo/component/paginavideo.component';
import { CuriositaComponent} from './curiosita/component/curiosita.component';
import { HomepageutenteComponent} from './homepageutente/homepageutente.component';
import { LeaderboardComponent} from './leaderboard/leaderboard.component';
import {SignupComponent} from "./signup/signup.component";
import {ServizipresenzaComponent} from "./servizipresenza/component/servizipresenza.component";
import {VeterinarioComponent} from "./veterinario/veterinario.component";
import {PensioneComponent} from "./pensione/pensione.component";
import {TaxiComponent} from "./taxi/taxi.component";
import {DogsitterComponent} from "./dogsitter/dogsitter.component";
import {EducazioneComponent} from "./educazione/educazione.component";
import {ToelettaturaComponent} from "./toelettatura/toelettatura.component";
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import {HomepageadminComponent} from "./homepageadmin/homepageadmin.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  { path: 'contatti', component: ContattiComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'paginavideo', component: PaginavideoComponent },
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curiosita', component: CuriositaComponent},
  { path: 'homepageutente', component: HomepageutenteComponent},
  { path: 'homepageadmin', component: HomepageadminComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'servizipresenza', component: ServizipresenzaComponent},
  { path: 'pensione', component: PensioneComponent},
  { path: 'taxi', component: TaxiComponent},
  { path: 'educazione', component: EducazioneComponent},
  { path: 'dogsitter', component: DogsitterComponent},
  { path: 'veterinario', component: VeterinarioComponent},
  { path: 'toelettatura', component: ToelettaturaComponent},
  { path: 'loginadmin', component: LoginadminComponent},
  {redirectTo:'', path:'login', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
