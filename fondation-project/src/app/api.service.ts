import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const apiURL = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // loadFondations() {
  //   return this.httpClient.get<IFondation[]>(`${apiURL}/fondations`);
  // }

  // loadFondation(id: number) {
  //   return this.httpClient.get<IFondation>(`${apiURL}/fondations/${id}`);
  // }

  // loadPosts(limit?: number) {
  //   return this.httpClient.get<IPost[]>(
  //     `${apiURL}/posts${limit ? `?limit=${limit}` : ''}`
  //   );
  // }
}
