import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/app/Model/stage';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private baseUrl2 = "http://localhost:8095/api/stagiaire/stages";

  constructor(private httpClient: HttpClient) { }

  public getAllStages(): Observable<Stage[]> {
    return this.httpClient.get<Stage[]>(this.baseUrl2);
  }
}
