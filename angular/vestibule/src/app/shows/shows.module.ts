import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './shows-list.component';
import { PosterStripComponent } from './poster-strip/poster-strip.component';


@NgModule({
  declarations: [ShowsListComponent, PosterStripComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
