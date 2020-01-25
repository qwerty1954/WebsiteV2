import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { IntroductionComponent } from './app-core/introduction/introduction.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
