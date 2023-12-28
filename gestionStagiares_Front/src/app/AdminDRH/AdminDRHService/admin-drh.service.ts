import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AdminDrhService {
  private baseUrl = "http://localhost:8080/api/adminDrh/stagiaires";
  private baseUrl2 = "http://localhost:8080/api/adminDrh/stages";

  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }

  public getAllStages(): Observable<Stage[]> {
    return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
  public getStagiaire(id:number): Observable<Stagiaire>{
    return this.httpClient.get<Stagiaire>(`${this.baseUrl}/${id}`);

  } 
}
