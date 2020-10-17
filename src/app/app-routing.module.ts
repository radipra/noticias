import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticiasRTVE/noticiasRTVE.component';
import { OtrasNoticiasComponent } from './otras-noticias/otras-noticias.component';

const routes: Routes = [
  { path: '', redirectTo: '/noticiasRTVE', pathMatch: 'full' },
  { path: 'noticiasRTVE', component: NoticiasComponent },
  { path: 'otras', component: OtrasNoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
