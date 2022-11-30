import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { DeleteContratComponent } from './delete-contrat/delete-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { ListEtudiantContratComponent } from './list-etudiant-contrat/list-etudiant-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';


@NgModule({
  declarations: [
    ContratsComponent,
    AddContratComponent,
    DeleteContratComponent,
    ListContratComponent,
    DetailContratComponent,
    ListEtudiantContratComponent,
    FormContratComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule
  ]
})
export class ContratsModule { }
