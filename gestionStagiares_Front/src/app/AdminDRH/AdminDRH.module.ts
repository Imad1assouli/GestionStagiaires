// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDRHAcceuilComponent } from './admin-drh-acceuil/admin-drh-acceuil.component';
import { StatistiquesAdminDrhComponent } from './statistiques-admin-drh/statistiques-admin-drh.component';
import { StagesListDRHComponent } from './gestion_stages/stages-list/stages-list.component';
import { StagiairesListDRHComponent } from './gestion-stagiaires/stagiaires-list-drh/stagiaires-list-drh.component';
import { UpdateStagiaireAdminDRHComponent } from './gestion-stagiaires/update-stagiaire-admin-drh/update-stagiaire-admin-drh.component';
import { ViewStagiaireAdminDrhComponent } from './gestion-stagiaires/view-stagiaire-admin-drh/view-stagiaire-admin-drh.component';
import { AbsenceAdminDRHComponent } from './gestion-stagiaires/absence-admin-drh/absence-admin-drh.component';
import { AdminDRHRouting } from './AdminDRH-routing.module';
import { DetailsStageComponent } from './gestion_stages/details-stage/details-stage.component';

// admin.module.ts
@NgModule({
    declarations: [
      AdminDRHAcceuilComponent,
      StagesListDRHComponent,
      StagiairesListDRHComponent,
      UpdateStagiaireAdminDRHComponent,
      ViewStagiaireAdminDrhComponent,
      AbsenceAdminDRHComponent,
      StatistiquesAdminDrhComponent,
      DetailsStageComponent,
      // Include other components here
    ],
    imports: [
      CommonModule,
      AdminDRHRouting,
      // Remove the following line as RouterModule is already imported in AdminDRHRouting
      // RouterModule, 
      // Import other modules needed for the admin module
      BrowserModule,
      FormsModule,
      HttpClientModule,
    ],
    exports: [
      AdminDRHAcceuilComponent,
      StatistiquesAdminDrhComponent,
    
      // Include other components if needed
    ],
  })
  export class AdminDRHModule { }
  