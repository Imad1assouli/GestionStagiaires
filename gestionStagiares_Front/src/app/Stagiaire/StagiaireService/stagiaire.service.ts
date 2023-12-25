import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private baseUrl2 = "http://localhost:8095/api/stagiaire/stages";
  private baseUrl = "http://localhost:8095/api/admin/stages";
  private baseUrl1 = "http://localhost:8095/api/stagiaire/stages/demande";
 
  

  constructor(private httpClient: HttpClient) { }

  public getAllStages(): Observable<Stage[]> {
    return this.httpClient.get<Stage[]>(this.baseUrl2);
  }

  public demandeStage(id: number, stagiaire: Stagiaire): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl1}/${id}`,stagiaire);
}

  public getStageById(id: number): Observable<Stage> {
    return this.httpClient.get<Stage>(`${this.baseUrl}/${id}`);
}

}
