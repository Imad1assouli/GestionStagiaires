import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8095/api/admin/stagiaires";

  constructor(private httpClient: HttpClient) { }

  public getAllStagiaires(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(this.baseUrl);
  }
}
