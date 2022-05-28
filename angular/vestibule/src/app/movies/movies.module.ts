import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SharedModule } from "../shared/shared.module";
import { MoviesStatusGroupComponent } from './movies-list/movies-status-group/movies-status-group.component';


@NgModule({
  declarations: [MoviesListComponent, MoviesStatusGroupComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
