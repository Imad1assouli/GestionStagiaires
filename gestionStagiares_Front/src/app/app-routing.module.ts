import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAcceuilComponent } from './Admin/admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './Admin/statistiques/statistiques.component';


const routes: Routes = [
  { path: 'admin', component: AdminAcceuilComponent, children: [
    { path: '', redirectTo: 'stats', pathMatch: 'full' }, // Add a default child route
    { path: 'stats', component: StatistiquesComponent },
    // Add more child routes as needed
  ]},
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
