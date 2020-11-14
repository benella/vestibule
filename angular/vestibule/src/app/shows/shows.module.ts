import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './shows-list.component';
import { PosterStripComponent } from './poster-strip/poster-strip.component';
import { ShowDetailsComponent } from './show-details.component';


@NgModule({
  declarations: [ShowsListComponent, PosterStripComponent, ShowDetailsComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
