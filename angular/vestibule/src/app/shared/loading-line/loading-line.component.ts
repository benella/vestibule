import { Component } from '@angular/core';
import { fadeInOutAnimation } from "../animations/fadeInOut";

@Component({
  selector: 'vestibule-loading-line',
  templateUrl: './loading-line.component.html',
  styleUrls: ['./loading-line.component.scss'],
  animations: [fadeInOutAnimation]
})
export class LoadingLineComponent {}
