import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChisiamoComponent} from './chisiamo/chisiamo.component';
import { ContattiComponent} from './contatti/contatti.component';
import { HomepageComponent} from './homepage/homepage.component';
import { InfoComponent} from './info/info.component';
import { LoginComponent} from './login/login.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PaginavideoComponent} from './paginavideo/paginavideo.component';
import { RegistrazioneComponent} from './registrazione/registrazione.component';


const routes: Routes = [
  { path: 'contatti', component: ContattiComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'paginavideo', component: PaginavideoComponent },
  { path: 'chisiamo', component: ChisiamoComponent },
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
