// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Admin/Admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StagiaireModule } from './Stagiaire/stagiaire.module';

import { AdminDRHModule } from './AdminDRH/AdminDRH.module';

import { ChefDRHModule } from './ChefDRH/ChefDRH.module';
import { LoginComponent } from './Login/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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