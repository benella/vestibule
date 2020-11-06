import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vestibule-poster-strip',
  templateUrl: './poster-strip.component.html',
  styleUrls: ['./poster-strip.component.scss']
})
export class PosterStripComponent implements OnInit {
  @Input() paletteList: number[][]
  public mainColor: string
  constructor() { }

  ngOnInit(): void {
    if (this.paletteList.length) {
      this.mainColor = `rgb(${this.paletteList[0][0]}, ${this.paletteList[0][1]}, ${this.paletteList[0][2]})`
    } else {
      this.mainColor = `rgb(93, 108, 172)`
    }
  }

}
