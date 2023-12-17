// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Admin/Admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AcceuilStagiaireComponent } from './Stagiaire/acceuil-stagiaire/acceuil-stagiaire.component';
import { StagiaireModule } from './Stagiaire/stagiaire.module';
import { AdminDRHAcceuilComponent } from './AdminDRH/admin-drh-acceuil/admin-drh-acceuil.component';
import { AdminDRHModule } from './AdminDRH/AdminDRH.module';
import { AcceuilChefDRHComponent } from './ChefDRH/acceuil-chef-drh/acceuil-chef-drh.component';
import { UtilisateursDRHListComponent } from './ChefDRH/gestion-utilisateurs/utilisateurs-drh-list/utilisateurs-drh-list.component';
import { CreateUtilisateurDRHComponent } from './ChefDRH/gestion-utilisateurs/create-utilisateur-drh/create-utilisateur-drh.component';
import { UpdateUtilisateurDRHComponent } from './ChefDRH/gestion-utilisateurs/update-utilisateur-drh/update-utilisateur-drh.component';
import { ViewUtilisateurDRHComponent } from './ChefDRH/gestion-utilisateurs/view-utilisateur-drh/view-utilisateur-drh.component';
import { ChefDRHModule } from './ChefDRH/ChefDRH.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    StagiaireModule,
    AdminDRHModule,
    HttpClientModule,
    ChefDRHModule,
    AppRoutingModule, // Keep this as the last import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }