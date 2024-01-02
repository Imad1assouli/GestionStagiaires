import { CommonModule } from "@angular/common";
import { AcceuilStagiaireComponent } from "./acceuil-stagiaire/acceuil-stagiaire.component";
import { DemandeStageComponent } from "./demande-stage/demande-stage.component";
import { ListStagesStagiaireComponent } from "./list-stages-stagiaire/list-stages-stagiaire.component";
import { StagiaireRoutingModule } from "./stagiaire-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AcceuilStagiaireComponent,
    ListStagesStagiaireComponent,
    DemandeStageComponent,
  ],
  imports: [
    CommonModule,
    StagiaireRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [  // Make sure to export the components
    AcceuilStagiaireComponent,
    ListStagesStagiaireComponent,
    DemandeStageComponent,
  ],
})
export class StagiaireModule {}
