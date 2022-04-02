import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelBackgroundService {

  defaultBackgroundURL = "/static/images/vestibule_default-13.jpg"
  private backgroundURL = new BehaviorSubject(this.defaultBackgroundURL);

  currentBackground = this.backgroundURL.asObservable();

  constructor() { }

  changeBackground(url: string) {
    this.backgroundURL.next(url)
  }

  defaultBackground() {
    this.backgroundURL.next("")
  }
}
