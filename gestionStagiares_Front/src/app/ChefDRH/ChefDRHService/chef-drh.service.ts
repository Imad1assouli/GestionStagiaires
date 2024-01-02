import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from 'src/app/Model/absence';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class ChefDrhService {
  private baseUrl = "http://localhost:8080/api/chefDrh/stagiaires";
  private baseUrl2 = "http://localhost:8080/api/chefDrh/stages";
  private baseUrl3 = "http://localhost:8080/api/chefDrh/candidats";
  private baseUr9 = "http://localhost:8080/api/admin/statistics";
  private baseUrl4 = "http://localhost:8080/api/adminDrh/stages/affecter";
  private baseUrl5 = "http://localhost:8080/api/admin/absences";
  private basuUrl7="http://localhost:8080/api/admin/users";
  private basuUrl8="http://localhost:8080/api/admin/users";


  constructor(private httpClient: HttpClient) { }
  
  getStatistics(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUr9}`);
  }

  public getCandidats(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl3);
  }
  public updateStagiaire(stagiaireId: number, stagiaire: Stagiaire): Observable<Object> {
    return this.httpClient.put<Stagiaire>(`${this.baseUrl}/${stagiaireId}`, stagiaire);
  }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }
  public getStageByID(id:number):Observable<Stage>{
    return this.httpClient.get<Stage>(`${this.baseUrl2}/${id}`);
  }
  public deleteStagiaire(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  public getAllstages():Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
  public createStage(stage:Stage):Observable<Object>{
    return this.httpClient.post(this.baseUrl2, stage);
  }
  
  public markAbsence(id: number, absence: Absence) {
    return this.httpClient.post(`${this.baseUrl5}?stagiaireId=${id}`,absence);
}

  public getStagiaire(id:number): Observable<Stagiaire> {
    return this.httpClient.get<Stagiaire>(`${this.baseUrl}/${id}`);
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

public getAllUsers():Observable<User[]>{
  return this.httpClient.get<User[]>(this.basuUrl7);
}
public deleteUser(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.basuUrl7}/${id}`);
}
public getUser(id:number):Observable<User>{
  return this.httpClient.get<User>(`${this.basuUrl8}/${id}`);
}
public updateUser(id:number,user:User): Observable<Object>{
  return this.httpClient.put<User>(`${this.basuUrl8}/${id}`,user);

}
public createUser(user:User):Observable<Object>{
  return this.httpClient.post(this.basuUrl7, user);
}
}
