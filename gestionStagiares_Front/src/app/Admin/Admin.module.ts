import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminAcceuilComponent } from './admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { UtilisateursListComponent } from './gestion_utilisateurs/utilisateurs-list/utilisateurs-list.component';
import { UpdateUtilisateurComponent } from './gestion_utilisateurs/update-utilisateur/update-utilisateur.component';
import { CreateUtilisateurComponent } from './gestion_utilisateurs/create-utilisateur/create-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StagesListComponent } from './Stages/stages-list/stages-list.component';
import { StagiairesListComponent } from './Stagiaires/stagiaires-list/stagiaires-list.component';
import { UpadteStagiaireComponent } from './Stagiaires/upadte-stagiaire/upadte-stagiaire.component';
import { AbsenceComponent } from './Stagiaires/absence/absence.component';
import { ViewStagiaireComponent } from './Stagiaires/view-stagiaire/view-stagiaire.component';
import { ViewUtilisateurComponent } from './gestion_utilisateurs/view-utilisateur/view-utilisateur.component';
import { UpdateStageAdminComponent } from './Stages/update-stage-admin/update-stage-admin.component';
import { AddStageAdminComponent } from './Stages/add-stage-admin/add-stage-admin.component';
import { AffecterStageComponent } from './Stages/affecter-stage/affecter-stage.component';

@NgModule({
  declarations: [
    AdminAcceuilComponent,
    StatistiquesComponent,
    UtilisateursListComponent,
    UpdateUtilisateurComponent,
    CreateUtilisateurComponent,
    StagesListComponent,
    StagiairesListComponent,
    UpadteStagiaireComponent,
    AbsenceComponent,
    ViewStagiaireComponent,
    ViewUtilisateurComponent,
    UpdateStageAdminComponent,
    AddStageAdminComponent,
    AffecterStageComponent,
    // Include other components here
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    AdminAcceuilComponent,
    StatistiquesComponent,
    // Include other components if needed
  ],
})
export class AdminModule { }
