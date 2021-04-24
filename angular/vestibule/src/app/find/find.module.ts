import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindResultsComponent } from './find-results/find-results.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FindResultsComponent],
    imports: [
        CommonModule,
        FindRoutingModule,
        ReactiveFormsModule
    ]
})
export class FindModule { }
