// stagiaire.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagiaireRoutingModule } from './stagiaire-routing.module';
import { AcceuilStagiaireComponent } from './acceuil-stagiaire/acceuil-stagiaire.component';
import { ListStagesStagiaireComponent } from './list-stages-stagiaire/list-stages-stagiaire.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../Login/login/login.component';

@NgModule({
  declarations: [
    AcceuilStagiaireComponent,
    ListStagesStagiaireComponent,
    DemandeStageComponent,
  
    // Add more components if needed
  ],
  imports: [
    CommonModule,
    StagiaireRoutingModule,
    BrowserModule,
    StagiaireRoutingModule,
    FormsModule, // Add this line
    AppRoutingModule,
    HttpClientModule,
     // Import the routing module here
    // Add other modules if needed
  ],
})
export class StagiaireModule {}
