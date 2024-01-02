import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilChefDRHComponent } from './acceuil-chef-drh/acceuil-chef-drh.component';
import { StatistiquesChefDRHComponent } from './statistiques-chef-drh/statistiques-chef-drh.component';
import { UtilisateursDRHListComponent } from './gestion-utilisateurs/utilisateurs-drh-list/utilisateurs-drh-list.component';
import { CreateUtilisateurDRHComponent } from './gestion-utilisateurs/create-utilisateur-drh/create-utilisateur-drh.component';
import { StagesChefDRHListComponent } from './gestion-stagesDRH/stages-chef-drh-list/stages-chef-drh-list.component';
import { StagiairesChefDrhListComponent } from './gestion-stagiaires/stagiaires-chef-drh-list/stagiaires-chef-drh-list.component';
import { AddStageChefDRHComponent } from './gestion-stagesDRH/add-stage-chef-drh/add-stage-chef-drh.component';
import { ViewStagiaireChefDRHComponent } from './gestion-stagiaires/view-stagiaire-chef-drh/view-stagiaire-chef-drh.component';
import { UpdateStageChefDRHComponent } from './gestion-stagesDRH/update-stage-chef-drh/update-stage-chef-drh.component';
import { AffecterStageComponentChefDRH } from './gestion-stagesDRH/affecter-stage/affecter-stage.component';
import { AbsenceChefDRHComponent } from './gestion-stagiaires/absence-chef-drh/absence-chef-drh.component';
import { UpdateStagiaireChefDRHComponent } from './gestion-stagiaires/update-stagiaire-chef-drh/update-stagiaire-chef-drh.component';

const routes: Routes = [
    {
      path: '',
      component: AcceuilChefDRHComponent ,
      children: [
        { path: 'stats', component: StatistiquesChefDRHComponent },
        { path: 'listUtlisaeurs', component: UtilisateursDRHListComponent },
        { path: 'ajouterUtilisateur', component: CreateUtilisateurDRHComponent },
        { path: 'listStages', component: StagesChefDRHListComponent },
        { path: 'listStagiaires', component: StagiairesChefDrhListComponent },
        { path: 'addStage', component: AddStageChefDRHComponent },
        {path:'ViewStagiaire/:id',component:ViewStagiaireChefDRHComponent},
        { path: 'updateStage/:id', component: UpdateStageChefDRHComponent },
        { path: 'affecterStage/:id', component:AffecterStageComponentChefDRH  },
        { path: 'markAbsence/:id', component:AbsenceChefDRHComponent  },
        { path: 'updatestagiaire/:idStagiaire', component:UpdateStagiaireChefDRHComponent  },
        
        
        // Add more child routes as needed
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefDRHRoutingModule { }
