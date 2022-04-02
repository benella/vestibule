import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsStatusGroupComponent } from './shows-status-group.component';

describe('ShowsStatusGroupComponent', () => {
  let component: ShowsStatusGroupComponent;
  let fixture: ComponentFixture<ShowsStatusGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsStatusGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsStatusGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
