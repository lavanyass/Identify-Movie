import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyMovieGameComponent } from './identify-movie-game.component';

describe('IdentifyMovieGameComponent', () => {
  let component: IdentifyMovieGameComponent;
  let fixture: ComponentFixture<IdentifyMovieGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyMovieGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyMovieGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
