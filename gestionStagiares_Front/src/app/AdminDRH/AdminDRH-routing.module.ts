// admin-drh-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDRHAcceuilComponent } from './admin-drh-acceuil/admin-drh-acceuil.component';

import { StagesListDRHComponent } from './gestion_stages/stages-list/stages-list.component';
import { StagiairesListDRHComponent } from './gestion-stagiaires/stagiaires-list-drh/stagiaires-list-drh.component';
import { StatistiquesAdminDRHComponent } from './statistiques-admin-drh/statistiques-admin-drh.component';
import { ViewStagiaireAdminDrhComponent } from './gestion-stagiaires/view-stagiaire-admin-drh/view-stagiaire-admin-drh.component';
import { AbsenceComponent } from '../Admin/Stagiaires/absence/absence.component';
import { StagesListComponent } from '../Admin/Stages/stages-list/stages-list.component';
import { AddStageAdminComponent } from '../Admin/Stages/add-stage-admin/add-stage-admin.component';
import { UpdateStageAdminComponent } from '../Admin/Stages/update-stage-admin/update-stage-admin.component';
import { AffecterStageComponent } from './gestion_stages/affecter-stage/affecter-stage.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDRHAcceuilComponent,
    children: [
      { path: 'statsDRH', component: StatistiquesAdminDRHComponent },
      { path: 'stagesList', component: StagesListDRHComponent },
      { path: 'markAbsence/:id', component:AbsenceComponent  },
      { path: 'stagiairesList', component: StagiairesListDRHComponent },
      { path: 'listStages', component: StagesListComponent },
      { path: 'addStage', component: AddStageAdminComponent },

      { path: 'updateStage/:id', component: UpdateStageAdminComponent },
      { path: 'affecterStage/:id', component:AffecterStageComponent  },
      {path:'ViewStagiaire/:id',component:ViewStagiaireAdminDrhComponent},
      // Add more child routes as needed
    ]
  },
  // Optionally, you can add a wildcard route for 404 handling
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDRHRouting { }
