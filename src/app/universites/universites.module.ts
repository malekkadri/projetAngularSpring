import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitesRoutingModule } from './universites-routing.module';
import { UniversitesComponent } from './universites.component';



@NgModule({
  declarations: [
    UniversitesComponent,

  ],
  imports: [
    CommonModule,
    UniversitesRoutingModule
  ]
})
export class UniversitesModule { }
