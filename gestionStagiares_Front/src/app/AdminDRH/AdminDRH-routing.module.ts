// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDRHAcceuilComponent } from './admin-drh-acceuil/admin-drh-acceuil.component';

import { StagesListDRHComponent } from './gestion_stages/stages-list/stages-list.component';
import { StagiairesListDRHComponent } from './gestion-stagiaires/stagiaires-list-drh/stagiaires-list-drh.component';
import { StatistiquesAdminDRHComponent } from './statistiques-admin-drh/statistiques-admin-drh.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDRHAcceuilComponent,
    children: [
      { path: 'statsDRH', component: StatistiquesAdminDRHComponent },
      { path: 'stagesList', component: StagesListDRHComponent },
      { path: 'stagiairesList', component: StagiairesListDRHComponent },
      // Add more child routes as needed
    ]
  },
  // Optionally, you can add a wildcard route for 404 handling
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDRHRouting { }
