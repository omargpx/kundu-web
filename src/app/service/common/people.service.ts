import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from 'src/app/Models/Common/People';
import { PeoplePg } from 'src/app/Models/Common/PeoplePg';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly urlMs: string;

  constructor(private http: HttpClient) {
    this.urlMs = 'http://localhost:8090/ms/people';
  }

  getAll() {
    return this.http.get<People[]>(`${this.urlMs}/api/people/`);
  }

  getByPagination(page:number){
    return this.http.get<PeoplePg>(`${this.urlMs}/api/people/map?page=${page}&size=100`);
  }
}
