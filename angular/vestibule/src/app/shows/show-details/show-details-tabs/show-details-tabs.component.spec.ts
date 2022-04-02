import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsTabsComponent } from './show-details-tabs.component';

describe('ShowDetailsTabsComponent', () => {
  let component: ShowDetailsTabsComponent;
  let fixture: ComponentFixture<ShowDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
