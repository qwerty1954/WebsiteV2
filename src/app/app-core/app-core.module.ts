import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// Custom Modules
import { AppCoreRoutingModule } from './app-core-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    AppCoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class AppCoreModule { }
