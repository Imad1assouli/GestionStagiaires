// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAcceuilComponent } from './admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
    {
      path: '',
      component: AdminAcceuilComponent,
      children: [
        { path: 'stats', component: StatistiquesComponent },
        // Add more child routes as needed
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  
  

