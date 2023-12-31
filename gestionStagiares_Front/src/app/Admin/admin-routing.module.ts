import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAcceuilComponent } from './admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { UtilisateursListComponent } from './gestion_utilisateurs/utilisateurs-list/utilisateurs-list.component';
import { CreateUtilisateurComponent } from './gestion_utilisateurs/create-utilisateur/create-utilisateur.component';
import { StagesListComponent } from './Stages/stages-list/stages-list.component';
import { StagiairesListComponent } from './Stagiaires/stagiaires-list/stagiaires-list.component';
import { AddStageAdminComponent } from './Stages/add-stage-admin/add-stage-admin.component';


import { UpdateStageAdminComponent } from './Stages/update-stage-admin/update-stage-admin.component';
import { AffecterStageComponent } from './Stages/affecter-stage/affecter-stage.component';
import { AbsenceComponent } from './Stagiaires/absence/absence.component';
import { UpdateUtilisateurComponent } from './gestion_utilisateurs/update-utilisateur/update-utilisateur.component';
import { UpadteStagiaireComponent } from './Stagiaires/upadte-stagiaire/upadte-stagiaire.component';
import { ViewStagiaireAdminDrhComponent } from '../AdminDRH/gestion-stagiaires/view-stagiaire-admin-drh/view-stagiaire-admin-drh.component';
import { ViewStagiaireComponent } from './Stagiaires/view-stagiaire/view-stagiaire.component';
import { EncadrantsListComponent } from './Encadrants/encadrants-list/encadrants-list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminAcceuilComponent,
    children: [
      { path: 'stats', component: StatistiquesComponent },
      { path: 'listUtlisaeurs', component: UtilisateursListComponent },
      { path: 'ajouterUtilisateur', component: CreateUtilisateurComponent },
      { path: 'listStages', component: StagesListComponent },
      { path: 'listStagiaires', component: StagiairesListComponent },
      { path: 'addStage', component: AddStageAdminComponent },

     
      { path: 'affecterStage/:id', component:AffecterStageComponent  },
      { path: 'affecterEncadrant/:id', component:EncadrantsListComponent  },
      { path: 'updateStage/:id', component: UpdateStageAdminComponent },
      { path: 'markAbsence/:id', component:AbsenceComponent  },
      {path:'ViewStagiaire/:id',component:ViewStagiaireComponent},

      {path:'updateuser/:userId',component:UpdateUtilisateurComponent},
      {path:'updatestagiaire/:stagiaireId',component:UpadteStagiaireComponent},

      // Add more child routes as needed
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
