// app.module.ts

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireModule } from './Stagiaire/stagiaire.module';
import { AdminModule } from './Admin/Admin.module';
import { ChefDRHModule } from './ChefDRH/ChefDRH.module';
import { LoginComponent } from './Login/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminDRHModule } from './AdminDRH/AdminDRH.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './Login/auth.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    StagiaireModule,
    AdminModule,
    FormsModule,
    AdminDRHModule,
    HttpClientModule,
    ChefDRHModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

     // Keep this as the last import

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }


