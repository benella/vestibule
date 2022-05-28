import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesStatusGroupComponent } from './movies-status-group.component';

describe('MoviesStatusGroupComponent', () => {
  let component: MoviesStatusGroupComponent;
  let fixture: ComponentFixture<MoviesStatusGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesStatusGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesStatusGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
