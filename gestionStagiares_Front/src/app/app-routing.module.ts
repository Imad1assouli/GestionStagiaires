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


const routes: Routes = [
  { path: 'admin', component: AdminAcceuilComponent, children: [
    { path: '', redirectTo: 'stats', pathMatch: 'full' }, // Add a default child route
    { path: 'stats', component: StatistiquesComponent },
    { path: 'listUtlisaeurs', component: UtilisateursListComponent },
    { path: 'ajouterUtilisateur', component: CreateUtilisateurComponent },
    { path: 'listStages', component: StagesListComponent },
    { path: 'listStagiaires', component: StagiairesListComponent },
    { path: 'addStage', component: AddStageAdminComponent },
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
]},
{ path: 'chefDrh', component: AcceuilChefDRHComponent, children: [
   { path: 'stats', component: StatistiquesChefDRHComponent },
   { path: '', redirectTo: 'stats', pathMatch: 'full' },
   { path: 'listUtlisaeurs', component: UtilisateursDRHListComponent },
   { path: 'ajouterUtilisateur', component: CreateUtilisateurDRHComponent },
   { path: 'listStages', component: StagesChefDRHListComponent },
   { path: 'listStagiaires', component: StagiairesChefDrhListComponent },
   { path: 'addStage', component: AddStageChefDRHComponent },
]},


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
