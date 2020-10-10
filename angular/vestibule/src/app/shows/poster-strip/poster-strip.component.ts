import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vestibule-poster-strip',
  templateUrl: './poster-strip.component.html',
  styleUrls: ['./poster-strip.component.scss']
})
export class PosterStripComponent implements OnInit {
  @Input() posterUrl: string
  constructor() { }

  ngOnInit(): void {
    console.log(this.posterUrl);

  }

}
