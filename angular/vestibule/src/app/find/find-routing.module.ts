import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindResultsComponent } from "./find-results/find-results.component";

const routes: Routes = [
    { path: 'find/results', component: FindResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
