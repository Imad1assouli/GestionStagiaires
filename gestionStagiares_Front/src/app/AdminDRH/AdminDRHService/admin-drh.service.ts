import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from 'src/app/Model/absence';
import { Encadrant } from 'src/app/Model/encadrant';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AdminDrhService {
  private baseUrl = "http://localhost:8080/api/admin/stagiaires";
  private baseUrl2 = "http://localhost:8080/api/adminDrh/stages";
  private baseUrl5 = "http://localhost:8080/api/admin/absences";
  private baseUrl4 = "http://localhost:8080/api/admin/stages/affecter";
  private baseUrl3 = "http://localhost:8080/api/admin/candidats";
  private baseUr9 = "http://localhost:8080/api/admin/statistics";
  private baseUrl11 = "http://localhost:8080/api/admin/encadrant/stage";
  private basuUrl9="http://localhost:8080/api/admin/encadrants";
  private baseUrl0 = "http://localhost:8080/api/admin/stages/affecterEnacdrant";

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
  public updateStagiaire(stagiaireId: number, stagiaire: Stagiaire): Observable<Object> {
    return this.httpClient.put<Stagiaire>(`${this.baseUrl}/${stagiaireId}`, stagiaire);
  }
  
  public deleteStagiaire(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
 
  public markAbsence(id: number, absence: Absence) {
    return this.httpClient.post(`${this.baseUrl5}?stagiaireId=${id}`,absence);
}
public getAllstages(): Observable<Stage[]>{
  return this.httpClient.get<Stage[]>(this.baseUrl2);
}
public createStage(stage:Stage):Observable<Object>{
 return this.httpClient.post(this.baseUrl2, stage);
}


public getStageByID(id:number):Observable<Stage>{
 return this.httpClient.get<Stage>(`${this.baseUrl2}/${id}`);
}

public updateStage(id:number,stage:Stage):Observable<Object>{
 return this.httpClient.put<Stage>(`${this.baseUrl2}/${id}`,stage)
}
public deleteStage(id: number): Observable<Object> {
 return this.httpClient.delete(`${this.baseUrl2}/${id}`);
}
affecterStage(idStage: number, idcandidat: number): Observable<any> {
 return this.httpClient.get(`${this.baseUrl4}?stageId=${idStage}&stagiaireId=${idcandidat}`);
}
public getCandidats(): Observable<Stagiaire[]> {
  return this.httpClient.get<Stagiaire[]>(this.baseUrl3);
}
getStatistics(): Observable<any> {
  return this.httpClient.get<any>(`${this.baseUr9}`);
}


  getEncadrantOfStage(stageId: number): Observable<Encadrant> {
    return this.httpClient.get<Encadrant>(`${this.baseUrl11}/${stageId}`);
  }
 
  affecterEncadrant(idStage: number, idEncadrant: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl0}?stageId=${idStage}&encadrantId=${idEncadrant}`);
  }
  public getAllEncadrants(): Observable<Encadrant[]> {
    return this.httpClient.get<Encadrant[]>(this.basuUrl9);
  }
}
