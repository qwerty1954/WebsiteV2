import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Components
import { BeatSaberBaseComponent } from './beat-saber-base/beat-saber-base.component';
import { RankComponent } from './rank/rank.component';

@NgModule({
  declarations: [RankComponent, BeatSaberBaseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BeatSaberBaseComponent,
    RankComponent
  ]
})
export class BeatSaberModule { }
