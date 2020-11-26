import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';


@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
