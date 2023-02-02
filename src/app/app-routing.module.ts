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
import {SignupComponent} from "./signup/signup.component";
import {ServizipresenzaComponent} from "./servizipresenza/component/servizipresenza.component";

const routes: Routes = [
  { path: 'contatti', component: ContattiComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'paginavideo', component: PaginavideoComponent },
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curiosita', component: CuriositaComponent},
  { path: 'homepageutente', component: HomepageutenteComponent},
  {redirectTo:'', path:'login', pathMatch:'full'},
  { path: 'servizipresenza', component: ServizipresenzaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
