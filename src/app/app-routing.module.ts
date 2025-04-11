import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropreComponent } from './propre/propre.component';
import { HomeComponent } from './home/home.component';
import { ContatctComponent } from './contatct/contatct.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  
  {
    path: '', component: HomeComponent
  },
  { 
    path: 'about', component: PropreComponent
  },
  { path :'contact',component:ContatctComponent},
  { path :'projet',component:ProjetComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
