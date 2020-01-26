import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { IntroductionComponent } from './introduction/introduction.component';
import { ConnectFourComponent } from './../connect-four/connect-four.component';
import { TicTacToeComponent } from './../tic-tac-toe/tic-tac-toe.component';
import { BeatSaberBaseComponent } from '../beat-saber/beat-saber-base/beat-saber-base.component';

// Custom Modules
import { BeatSaberModule } from '../beat-saber/beat-saber.module';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'connect-4', component: ConnectFourComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'beat-saber', component: BeatSaberBaseComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes), BeatSaberModule],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
