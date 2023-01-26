import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent} from './contatti/contatti.component';
import { HomepageComponent} from './homepage/homepage.component';
import { InfoComponent} from './info/component/info.component';
import { LoginComponent} from './login/login.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PaginavideoComponent} from './paginavideo/paginavideo.component';
import { RegistrazioneComponent} from './registrazione/registrazione.component';


const routes: Routes = [
  { path: 'contatti', component: ContattiComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'paginavideo', component: PaginavideoComponent },
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
