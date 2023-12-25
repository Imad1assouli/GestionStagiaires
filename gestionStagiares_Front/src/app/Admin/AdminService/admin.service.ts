import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8095/api/admin/stagiaires";
  private baseUrl2 = "http://localhost:8095/api/admin/stages";
  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }

  public getAllstages(): Observable<Stage[]>{
     return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
}
