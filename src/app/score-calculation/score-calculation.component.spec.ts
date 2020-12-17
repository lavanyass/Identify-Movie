import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCalculationComponent } from './score-calculation.component';

describe('ScoreCalculationComponent', () => {
  let component: ScoreCalculationComponent;
  let fixture: ComponentFixture<ScoreCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
