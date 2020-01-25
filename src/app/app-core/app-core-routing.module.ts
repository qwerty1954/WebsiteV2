import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectFourComponent } from './../connect-four/connect-four.component';
import { TicTacToeComponent } from './../tic-tac-toe/tic-tac-toe.component';
import { BeatSaberComponent } from './../beat-saber/beat-saber.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'connect-4', component: ConnectFourComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'beat-saber', component: BeatSaberComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
