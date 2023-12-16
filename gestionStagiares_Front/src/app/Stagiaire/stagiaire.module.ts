// stagiaire.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagiaireRoutingModule } from './stagiaire-routing.module';
import { AcceuilStagiaireComponent } from './acceuil-stagiaire/acceuil-stagiaire.component';
import { ListStagesStagiaireComponent } from './list-stages-stagiaire/list-stages-stagiaire.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';

@NgModule({
  declarations: [
    AcceuilStagiaireComponent,
    ListStagesStagiaireComponent,
    DemandeStageComponent,
    // Add more components if needed
  ],
  imports: [
    CommonModule,
    StagiaireRoutingModule, // Import the routing module here
    // Add other modules if needed
  ],
})
export class StagiaireModule {}
