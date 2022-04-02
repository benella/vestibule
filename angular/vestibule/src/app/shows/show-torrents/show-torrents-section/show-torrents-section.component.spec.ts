import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTorrentsSectionComponent } from './show-torrents-section.component';

describe('ShowTorrentsSectionComponent', () => {
  let component: ShowTorrentsSectionComponent;
  let fixture: ComponentFixture<ShowTorrentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTorrentsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTorrentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
