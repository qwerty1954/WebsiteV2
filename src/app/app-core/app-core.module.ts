import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IntroductionComponent } from './introduction/introduction.component';

// Custom Modules
import { AppCoreRoutingModule } from './app-core-routing.module';
import { BeatSaberModule } from '../beat-saber/beat-saber.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, IntroductionComponent],
  imports: [
    CommonModule,
    AppCoreRoutingModule,
    BeatSaberModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    IntroductionComponent
  ]
})
export class AppCoreModule { }
