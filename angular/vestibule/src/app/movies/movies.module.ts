import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SharedModule } from "../shared/shared.module";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [MoviesListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MoviesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
