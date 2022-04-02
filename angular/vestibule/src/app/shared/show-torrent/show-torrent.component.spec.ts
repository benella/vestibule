import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTorrentComponent } from './show-torrent.component';

describe('ShowTorrentComponent', () => {
  let component: ShowTorrentComponent;
  let fixture: ComponentFixture<ShowTorrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTorrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTorrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
