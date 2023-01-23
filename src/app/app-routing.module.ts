import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent} from './contatti/contatti.component';


const routes: Routes = [
  { path: 'contatti', component: ContattiComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
