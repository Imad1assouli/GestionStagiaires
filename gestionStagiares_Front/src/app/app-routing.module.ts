import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAcceuilComponent } from './Admin/admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './Admin/statistiques/statistiques.component';
import { UtilisateursListComponent } from './Admin/gestion_utilisateurs/utilisateurs-list/utilisateurs-list.component';
import { CreateUtilisateurComponent } from './Admin/gestion_utilisateurs/create-utilisateur/create-utilisateur.component';
import { StagesListComponent } from './Admin/Stages/stages-list/stages-list.component';
import { StagiairesListComponent } from './Admin/Stagiaires/stagiaires-list/stagiaires-list.component';
import { AcceuilStagiaireComponent } from './Stagiaire/acceuil-stagiaire/acceuil-stagiaire.component';
import { ListStagesStagiaireComponent } from './Stagiaire/list-stages-stagiaire/list-stages-stagiaire.component';
import { StagesListDRHComponent } from './AdminDRH/gestion_stages/stages-list/stages-list.component';
import { StagiairesListDRHComponent } from './AdminDRH/gestion-stagiaires/stagiaires-list-drh/stagiaires-list-drh.component';
import { AdminDRHAcceuilComponent } from './AdminDRH/admin-drh-acceuil/admin-drh-acceuil.component';
import { AddStageAdminComponent } from './Admin/Stages/add-stage-admin/add-stage-admin.component';
import { StatistiquesAdminDRHComponent } from './AdminDRH/statistiques-admin-drh/statistiques-admin-drh.component';
import { UtilisateursDRHListComponent } from './ChefDRH/gestion-utilisateurs/utilisateurs-drh-list/utilisateurs-drh-list.component';
import { StatistiquesChefDRHComponent } from './ChefDRH/statistiques-chef-drh/statistiques-chef-drh.component';
import { CreateUtilisateurDRHComponent } from './ChefDRH/gestion-utilisateurs/create-utilisateur-drh/create-utilisateur-drh.component';
import { StagesChefDRHListComponent } from './ChefDRH/gestion-stagesDRH/stages-chef-drh-list/stages-chef-drh-list.component';
import { StagiairesChefDrhListComponent } from './ChefDRH/gestion-stagiaires/stagiaires-chef-drh-list/stagiaires-chef-drh-list.component';
import { AddStageChefDRHComponent } from './ChefDRH/gestion-stagesDRH/add-stage-chef-drh/add-stage-chef-drh.component';
import { AcceuilChefDRHComponent } from './ChefDRH/acceuil-chef-drh/acceuil-chef-drh.component';
import { DemandeStageComponent } from './Stagiaire/demande-stage/demande-stage.component';

import { UpadteStagiaireComponent } from './Admin/Stagiaires/upadte-stagiaire/upadte-stagiaire.component';
import { UpdateStageAdminComponent } from './Admin/Stages/update-stage-admin/update-stage-admin.component';
import { AffecterStageComponent } from './Admin/Stages/affecter-stage/affecter-stage.component';
import { AbsenceComponent } from './Admin/Stagiaires/absence/absence.component';
import { UpdateUtilisateurComponent } from './Admin/gestion_utilisateurs/update-utilisateur/update-utilisateur.component';
import { LoginComponent } from './Login/login/login.component';
import { ViewStagiaireAdminDrhComponent } from './AdminDRH/gestion-stagiaires/view-stagiaire-admin-drh/view-stagiaire-admin-drh.component';
import { ViewStagiaireComponent } from './Admin/Stagiaires/view-stagiaire/view-stagiaire.component';
import { ViewStagiaireChefDRHComponent } from './ChefDRH/gestion-stagiaires/view-stagiaire-chef-drh/view-stagiaire-chef-drh.component';
import { UpdateStageChefDRHComponent } from './ChefDRH/gestion-stagesDRH/update-stage-chef-drh/update-stage-chef-drh.component';
import { AffecterStageComponentAdminDrh } from './AdminDRH/gestion_stages/affecter-stage/affecter-stage.component';
import { AffecterStageComponentChefDRH } from './ChefDRH/gestion-stagesDRH/affecter-stage/affecter-stage.component';
import { AbsenceChefDRHComponent } from './ChefDRH/gestion-stagiaires/absence-chef-drh/absence-chef-drh.component';
import { UpdateStagiaireChefDRHComponent } from './ChefDRH/gestion-stagiaires/update-stagiaire-chef-drh/update-stagiaire-chef-drh.component';
import { UpdateStagiaireAdminDRHComponent } from './AdminDRH/gestion-stagiaires/update-stagiaire-admin-drh/update-stagiaire-admin-drh.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminAcceuilComponent, children: [
    { path: '', redirectTo: 'stats', pathMatch: 'full' }, // Add a default child route
    { path: 'stats', component: StatistiquesComponent },
    { path: 'listUtlisaeurs', component: UtilisateursListComponent },
    { path: 'ajouterUtilisateur', component: CreateUtilisateurComponent },
    { path: 'listStages', component: StagesListComponent },
    { path: 'listStagiaires', component: StagiairesListComponent },
    { path: 'addStage', component: AddStageAdminComponent },
    { path: 'updateStage/:id', component: UpdateStageAdminComponent },
    { path: 'affecterStage/:id', component:AffecterStageComponent  },
    { path: 'markAbsence/:id', component:AbsenceComponent  },
    {path:'updateuser/:userId',component:UpdateUtilisateurComponent},
    {path:'updatestagiaire/:stagiaireId',component:UpadteStagiaireComponent},
    {path:'ViewStagiaire/:id',component:ViewStagiaireComponent},
    // Add more child routes as needed

  ]},
  { path: 'stagiaire', component: AcceuilStagiaireComponent, children: [
    { path: '', redirectTo: 'listStagesStagiaire', pathMatch: 'full' }, // Add a default child route
    { path: 'listStagesStagiaire', component: ListStagesStagiaireComponent },
    {path:"demandeStage/:id",component:DemandeStageComponent},
       
   
    // Add more child routes as needed
  ]},
  { path: 'adminDrh', component: AdminDRHAcceuilComponent, children: [
    { path: 'statsDRH', component:StatistiquesAdminDRHComponent  },
    { path: '', redirectTo: 'statsDRH', pathMatch: 'full' }, // Add a default child route
    { path: 'stagesList', component: StagesListDRHComponent },
    { path: 'stagiairesList', component: StagiairesListDRHComponent },
    { path: 'markAbsence/:id', component:AbsenceComponent  },
    { path: 'listStages', component: StagesListComponent },
      { path: 'addStage', component: AddStageAdminComponent },
      { path: 'updateStage/:id', component: UpdateStageAdminComponent },
      { path: 'affecterStage/:id', component:AffecterStageComponentAdminDrh  },
      {path:'updatestagiaire/:stagiaireId',component:UpdateStagiaireAdminDRHComponent},
    {path:'ViewStagiaire/:id',component:ViewStagiaireAdminDrhComponent},
]},
{ path: 'chefDrh', component: AcceuilChefDRHComponent, children: [
   { path: 'stats', component: StatistiquesChefDRHComponent },
   { path: '', redirectTo: 'stats', pathMatch: 'full' },
   { path: 'listUtlisaeurs', component: UtilisateursDRHListComponent },
   { path: 'ajouterUtilisateur', component: CreateUtilisateurDRHComponent },
   { path: 'listStages', component: StagesChefDRHListComponent },
   { path: 'listStagiaires', component: StagiairesChefDrhListComponent },
   { path: 'addStage', component: AddStageChefDRHComponent },
   {path:'ViewStagiaire/:id',component:ViewStagiaireChefDRHComponent},
   { path: 'updateStage/:id', component: UpdateStageChefDRHComponent },
   { path: 'affecterStage/:id', component:AffecterStageComponentChefDRH  },
   { path: 'markAbsence/:id', component:AbsenceChefDRHComponent  },
   { path: 'updatestagiaire/:stagiaireId', component:UpdateStagiaireChefDRHComponent  },
]},


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
