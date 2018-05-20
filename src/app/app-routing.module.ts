import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestComponent } from './quest/quest.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quest', component: QuestComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
