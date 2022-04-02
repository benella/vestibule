import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterStripComponent } from './poster-strip.component';

describe('PosterStripComponent', () => {
  let component: PosterStripComponent;
  let fixture: ComponentFixture<PosterStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
