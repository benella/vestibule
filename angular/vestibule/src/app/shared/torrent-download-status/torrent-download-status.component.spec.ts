import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentDownloadStatusComponent } from './torrent-download-status.component';

describe('TorrentDownloadStatusComponent', () => {
  let component: TorrentDownloadStatusComponent;
  let fixture: ComponentFixture<TorrentDownloadStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrentDownloadStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentDownloadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
