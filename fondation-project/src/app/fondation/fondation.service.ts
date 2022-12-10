import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFondation } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FondationService {

  constructor(private http: HttpClient) { }

  

  getFondation(id: string) {
    return this.http.get<IFondation>('/api/fondations/' + id);
  }

  createFondation(title: string, description: string, location: string, img: string) {
    return this.http.post<IFondation>('/api/fondations/', { title, description, location, img});
  }

  updateFondation(fondationId: string, title: string, description: string, location: string, img: string) {
    return this.http.put<IFondation>('/api/fondations/' + fondationId, { title, description, location, img });
  }

  deleteFondation(fondationId: string) {
    return this.http.delete<IFondation>('/api/fondations/' + fondationId);
  }
}