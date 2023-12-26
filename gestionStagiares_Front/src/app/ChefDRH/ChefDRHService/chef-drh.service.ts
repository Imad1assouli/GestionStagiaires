import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class ChefDrhService {
  private baseUrl = "http://localhost:8080/api/chefDrh/stagiaires";
  private baseUrl2 = "http://localhost:8080/api/chefDrh/stages";

  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }

  public getAllstages():Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
  public createStage(stage:Stage):Observable<Object>{
    return this.httpClient.post(this.baseUrl2, stage);
  }
}
