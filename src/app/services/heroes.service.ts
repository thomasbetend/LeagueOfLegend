import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../typings';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  SERVER_URL: string = "http://localhost:8080/api/data";

  constructor(private http: HttpClient) { 
  }

  getHeroes() {
    return this.http.get<Hero>(this.SERVER_URL);
  };

  getHeroById(id: number) {
    return this.http.get<Hero>(`${this.SERVER_URL}/${id}`);
  };

  deleteHeroes(id: number) {
    return this.http.delete(`${this.SERVER_URL}/${id}`);
  }
}
