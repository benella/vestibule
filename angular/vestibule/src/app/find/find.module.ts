import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindResultsComponent } from './find-results/find-results.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [FindResultsComponent],
    imports: [
        CommonModule,
        SharedModule,
        FindRoutingModule,
        ReactiveFormsModule
    ]
})
export class FindModule { }
