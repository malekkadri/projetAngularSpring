import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { AddEtudiantsComponent } from './add-etudiants/add-etudiants.component';
import { DeleteEtudiantsComponent } from './delete-etudiants/delete-etudiants.component';
import { ModifierEtudiantsComponent } from './modifier-etudiants/modifier-etudiants.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { ListAdminEtudiantsComponent } from './list-admin-etudiants/list-admin-etudiants.component';
import { FormEtudiantsComponent } from './form-etudiants/form-etudiants.component';
import { UpdateEtudiantsComponent } from './update-etudiants/update-etudiants.component';


@NgModule({
  declarations: [
    EtudiantsComponent,
    AddEtudiantsComponent,
    DeleteEtudiantsComponent,
    ModifierEtudiantsComponent,
    ListEtudiantsComponent,
    ListAdminEtudiantsComponent,
    FormEtudiantsComponent,
    UpdateEtudiantsComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
