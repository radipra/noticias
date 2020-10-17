import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticiasRTVE/noticiasRTVE.component';

const routes: Routes = [
  { path: '', redirectTo: '/noticiasRTVE', pathMatch: 'full' },
  { path: 'noticiasRTVE', component: NoticiasComponent },
  { path: 'otras', component: NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
