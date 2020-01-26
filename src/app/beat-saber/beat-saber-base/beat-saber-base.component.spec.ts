import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatSaberBaseComponent } from './beat-saber-base.component';

describe('BeatSaberBaseComponent', () => {
  let component: BeatSaberBaseComponent;
  let fixture: ComponentFixture<BeatSaberBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatSaberBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatSaberBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
