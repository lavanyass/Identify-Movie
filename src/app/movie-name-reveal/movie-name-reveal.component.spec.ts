import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNameRevealComponent } from './movie-name-reveal.component';

describe('MovieNameRevealComponent', () => {
  let component: MovieNameRevealComponent;
  let fixture: ComponentFixture<MovieNameRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNameRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNameRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
