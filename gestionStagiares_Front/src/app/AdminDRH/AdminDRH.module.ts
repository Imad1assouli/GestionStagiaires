// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDRHAcceuilComponent } from './admin-drh-acceuil/admin-drh-acceuil.component';

import { StagesListDRHComponent } from './gestion_stages/stages-list/stages-list.component';
import { StagiairesListDRHComponent } from './gestion-stagiaires/stagiaires-list-drh/stagiaires-list-drh.component';
import { UpdateStagiaireAdminDRHComponent } from './gestion-stagiaires/update-stagiaire-admin-drh/update-stagiaire-admin-drh.component';
import { ViewStagiaireAdminDrhComponent } from './gestion-stagiaires/view-stagiaire-admin-drh/view-stagiaire-admin-drh.component';
import { AbsenceAdminDRHComponent } from './gestion-stagiaires/absence-admin-drh/absence-admin-drh.component';
import { AdminDRHRouting } from './AdminDRH-routing.module';
import { DetailsStageComponent } from './gestion_stages/details-stage/details-stage.component';
import { StatistiquesAdminDRHComponent } from './statistiques-admin-drh/statistiques-admin-drh.component';
import { AddStageAdmindrhComponent } from './gestion_stages/add-stage-admindrh/add-stage-admindrh.component';
import {  AffecterStageComponentAdminDrh } from './gestion_stages/affecter-stage/affecter-stage.component';
import { UpdateStageComponent } from './gestion_stages/update-stage/update-stage.component';
import { EncadransListAdminDrhComponent } from './Encadrants/encadrans-list-admin-drh/encadrans-list-admin-drh.component';

// admin.module.ts
@NgModule({
    declarations: [
      AdminDRHAcceuilComponent,
      StagesListDRHComponent,
      StagiairesListDRHComponent,
      UpdateStagiaireAdminDRHComponent,
      ViewStagiaireAdminDrhComponent,
      AbsenceAdminDRHComponent,
      DetailsStageComponent,
      StatistiquesAdminDRHComponent,
      AddStageAdmindrhComponent,
      AffecterStageComponentAdminDrh,
      UpdateStageComponent,
      EncadransListAdminDrhComponent,
      // Include other components here
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      HttpClientModule,
    ],
    exports: [
      AdminDRHAcceuilComponent,
      StatistiquesAdminDRHComponent
      // Include other components if needed
    ],
  })
  export class AdminDRHModule { }
  