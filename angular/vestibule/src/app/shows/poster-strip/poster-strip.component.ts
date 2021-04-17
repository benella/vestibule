import { Component, Input, OnInit } from '@angular/core';
import { Palette } from "../show";

@Component({
  selector: 'vestibule-poster-strip',
  templateUrl: './poster-strip.component.html',
  styleUrls: ['./poster-strip.component.scss']
})
export class PosterStripComponent implements OnInit {
  @Input() palette: Palette
  @Input() width: string = '5rem'
  public primaryColor: string
  public lightColor: string
  public darkColor: string
  public secondaryColor: string
  constructor() { }

  ngOnInit(): void {
    if (this.palette) {
      this.primaryColor = `rgb(${this.palette.primary[0]}, ${this.palette.primary[1]}, ${this.palette.primary[2]})`
      this.lightColor = `rgb(${this.palette.light[0]}, ${this.palette.light[1]}, ${this.palette.light[2]})`
      this.darkColor = `rgb(${this.palette.dark[0]}, ${this.palette.dark[1]}, ${this.palette.dark[2]})`
      if (this.palette.secondary) {
        this.secondaryColor = `rgb(${this.palette.secondary[0]}, ${this.palette.secondary[1]}, ${this.palette.secondary[2]})`
      }
    } else {
      this.primaryColor = `rgb(93, 108, 172)`
      this.lightColor = `rgb(93, 108, 172)`
      this.darkColor = `rgb(93, 108, 172)`
      this.secondaryColor = `rgb(93, 108, 172)`
    }
  }

  stripGradientBackground(): object {
    return {
      background: `linear-gradient(90deg, ${this.primaryColor} 0%, ${this.secondaryColor} 100%)`
    }
  }

  stripStyle(): object {
    return {
      backgroundColor: this.primaryColor,
      width: `${this.width}`
    }
  }
}
