// stagiaire-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilStagiaireComponent } from './acceuil-stagiaire/acceuil-stagiaire.component';
import { ListStagesStagiaireComponent } from './list-stages-stagiaire/list-stages-stagiaire.component';

const routes: Routes = [
  
  {
    path: '',
    component: AcceuilStagiaireComponent,
    children: [
      { path: '', redirectTo: 'listStagesStagiaire', pathMatch: 'full' },
      { path: 'listStagesStagiaire', component: ListStagesStagiaireComponent },
      // Add more child routes as needed
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagiaireRoutingModule {}
