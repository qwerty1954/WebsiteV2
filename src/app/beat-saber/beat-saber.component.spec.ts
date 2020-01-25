import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatSaberComponent } from './beat-saber.component';

describe('BeatSaberComponent', () => {
  let component: BeatSaberComponent;
  let fixture: ComponentFixture<BeatSaberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatSaberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatSaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
