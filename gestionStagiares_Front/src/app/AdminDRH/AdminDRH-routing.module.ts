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
import { AffecterStageComponentAdminDrh } from './gestion_stages/affecter-stage/affecter-stage.component';
import { UpdateStagiaireAdminDRHComponent } from './gestion-stagiaires/update-stagiaire-admin-drh/update-stagiaire-admin-drh.component';
import { EncadransListAdminDrhComponent } from './Encadrants/encadrans-list-admin-drh/encadrans-list-admin-drh.component';



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
      {path:'updatestagiaire/:stagiaireId',component:UpdateStagiaireAdminDRHComponent},
      { path: 'updateStage/:id', component: UpdateStageAdminComponent },
      { path: 'affecterStage/:id', component:AffecterStageComponentAdminDrh  },
      {path:'ViewStagiaire/:id',component:ViewStagiaireAdminDrhComponent},
      { path: 'affecterEncadrant/:id', component:EncadransListAdminDrhComponent  },
    ]
  },
  //wildcard route for 404 handling
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDRHRouting { }
