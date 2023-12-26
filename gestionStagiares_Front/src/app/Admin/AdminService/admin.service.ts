import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  deletuser(id: Number) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:8080/api/admin/stagiaires";
  private baseUrl2 = "http://localhost:8080/api/admin/stages";
  private baseUrl3 = "http://localhost:8080/api/admin/stages";
  private basuUrl4="http://localhost:8080/api/admin/users";
  private basuUrl5="http://localhost:8080/api/admin/users";
  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }

  public getAllstages(): Observable<Stage[]>{
     return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
  public createStage(stage:Stage):Observable<Object>{
    return this.httpClient.post(this.baseUrl3, stage);
  }
  public getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.basuUrl4);
  }
  public deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.basuUrl4}/${id}`);
  }
  public getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.basuUrl5}/${id}`);
  }
  public updateUser(id:number,user:User): Observable<Object>{
    return this.httpClient.put<User>(`${this.basuUrl5}/${id}`,user);

  }
  public createUser(user:User):Observable<Object>{
    return this.httpClient.post(this.basuUrl4, user);
  }
  public deleteStagiaire(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  public getStagiaire(stagiaireId:number):Observable<Stagiaire>{
    return this.httpClient.get<Stagiaire>(`${this.baseUrl}/${stagiaireId}`);
  }

  public updateStagiaire(stagiaireId: number, stagiaire: Stagiaire): Observable<Object> {
    return this.httpClient.put<Stagiaire>(`${this.baseUrl}/${stagiaireId}`, stagiaire);
  }
  
  
}
