import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsListComponent } from "./shows-list/shows-list.component";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { AddShowComponent } from "./add-show/add-show.component";

const routes: Routes = [
  { path: 'shows', component: ShowsListComponent },
  { path: 'shows/add', component: AddShowComponent },
  { path: 'shows/:imdb_id', component: ShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
