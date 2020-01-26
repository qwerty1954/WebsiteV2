import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Components
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Custom Modules
// If you were to add any service providers to the feature module, 
// AppModule would know about those too, as would any other feature modules
import { AppCoreModule } from './app-core/app-core.module';
import { BeatSaberModule } from './beat-saber/beat-saber.module';
import { BeatSaberBaseComponent } from './beat-saber/beat-saber-base/beat-saber-base.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectFourComponent,
    TicTacToeComponent,
    BeatSaberBaseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCoreModule,
    BeatSaberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
