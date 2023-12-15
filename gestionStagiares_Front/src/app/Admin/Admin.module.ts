// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminAcceuilComponent } from './admin-acceuil/admin-acceuil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
// Import other components and services specific to the admin module

@NgModule({
  declarations: [
    AdminAcceuilComponent,
    StatistiquesComponent,
    // Include other components here
  ],
  imports: [
    CommonModule,
    RouterModule, // Import the RouterModule here as well if needed
    // Import other modules needed for the admin module
  ],
  exports: [
    AdminAcceuilComponent,
    StatistiquesComponent,
    // Include other components if needed
  ],
})
export class AdminModule { }
