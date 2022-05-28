import { Component, Input } from '@angular/core';
import { MovieInList } from "../../interfaces/movie";

@Component({
  selector: 'vestibule-movies-status-group',
  templateUrl: './movies-status-group.component.html',
  styleUrls: ['./movies-status-group.component.scss']
})
export class MoviesStatusGroupComponent {
  @Input() title: string
  @Input() movieList: MovieInList[]
}
