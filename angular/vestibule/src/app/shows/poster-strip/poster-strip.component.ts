import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vestibule-poster-strip',
  templateUrl: './poster-strip.component.html',
  styleUrls: ['./poster-strip.component.scss']
})
export class PosterStripComponent implements OnInit {
  @Input() paletteList: number[][]
  public mainColor: string
  public secondaryColor: string
  public thirdColor: string
  constructor() { }

  ngOnInit(): void {
    if (this.paletteList.length) {
      this.mainColor = `rgb(${this.paletteList[0][0]}, ${this.paletteList[0][1]}, ${this.paletteList[0][2]})`
      this.secondaryColor = `rgb(${this.paletteList[1][0]}, ${this.paletteList[1][1]}, ${this.paletteList[1][2]})`
      this.thirdColor = `rgb(${this.paletteList[2][0]}, ${this.paletteList[2][1]}, ${this.paletteList[2][2]})`
    } else {
      this.mainColor = `rgb(93, 108, 172)`
      this.secondaryColor = `rgb(189, 76, 98)`
      this.thirdColor = `rgb(189, 76, 98)`
    }
  }

  stripBackground(): object{
    return {
      background: `linear-gradient(90deg, ${this.mainColor} 0%, ${this.secondaryColor} 100%)`
    }
  }
}
