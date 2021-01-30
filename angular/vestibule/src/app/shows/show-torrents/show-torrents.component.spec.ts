import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTorrentsComponent } from './show-torrents.component';

describe('ShowTorrentsComponent', () => {
  let component: ShowTorrentsComponent;
  let fixture: ComponentFixture<ShowTorrentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTorrentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTorrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
