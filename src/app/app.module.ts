import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Extra Components
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { BeatSaberComponent } from './beat-saber/beat-saber.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectFourComponent,
    TicTacToeComponent,
    BeatSaberComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
