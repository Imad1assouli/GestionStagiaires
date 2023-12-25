// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcceuilChefDRHComponent } from './acceuil-chef-drh/acceuil-chef-drh.component';
import { CreateUtilisateurDRHComponent } from './gestion-utilisateurs/create-utilisateur-drh/create-utilisateur-drh.component';
import { UpdateUtilisateurDRHComponent } from './gestion-utilisateurs/update-utilisateur-drh/update-utilisateur-drh.component';
import { UtilisateursDRHListComponent } from './gestion-utilisateurs/utilisateurs-drh-list/utilisateurs-drh-list.component';
import { ViewUtilisateurDRHComponent } from './gestion-utilisateurs/view-utilisateur-drh/view-utilisateur-drh.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StagesChefDRHListComponent } from './gestion-stagesDRH/stages-chef-drh-list/stages-chef-drh-list.component';
import { UpdateStageChefDRHComponent } from './gestion-stagesDRH/update-stage-chef-drh/update-stage-chef-drh.component';
import { StagiairesChefDrhListComponent } from './gestion-stagiaires/stagiaires-chef-drh-list/stagiaires-chef-drh-list.component';
import { AbsenceChefDRHComponent } from './gestion-stagiaires/absence-chef-drh/absence-chef-drh.component';
import { UpdateStagiaireChefDRHComponent } from './gestion-stagiaires/update-stagiaire-chef-drh/update-stagiaire-chef-drh.component';
import { ViewStagiaireChefDRHComponent } from './gestion-stagiaires/view-stagiaire-chef-drh/view-stagiaire-chef-drh.component';
import { AddStageChefDRHComponent } from './gestion-stagesDRH/add-stage-chef-drh/add-stage-chef-drh.component';
import { StatistiquesChefDRHComponent } from './statistiques-chef-drh/statistiques-chef-drh.component';
// Import other components and services specific to the admin module

@NgModule({
  declarations: [
    AcceuilChefDRHComponent,
    CreateUtilisateurDRHComponent,
    UpdateUtilisateurDRHComponent,
    UtilisateursDRHListComponent,
    ViewUtilisateurDRHComponent,
    StagesChefDRHListComponent,
    UpdateStageChefDRHComponent,
    StagiairesChefDrhListComponent,
    AbsenceChefDRHComponent,
    UpdateStagiaireChefDRHComponent,
    ViewStagiaireChefDRHComponent,
    AddStageChefDRHComponent,
    StatistiquesChefDRHComponent,

    
    // Include other components here
  ],
  imports: [
    CommonModule,
    RouterModule, 
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    AcceuilChefDRHComponent,
    // Include other components if needed
  ],
})
export class ChefDRHModule { }
