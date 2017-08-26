import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs'
import 'rxjs/add/operator/toPromise';
import { Hero } from '../component/hero';

@Injectable()
export class HeroService {
  private baseUrl = 'http://localhost:3000';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:*' });
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(`${this.baseUrl}/getHeroes`, this.headers).toPromise().then(response => response.json() as Hero[])
      .catch(this.handleError);
  }
  search(term: string): Observable<Hero[]> {
    return this.http.get(`${this.baseUrl}/searchHeroes/${term}`)
      .map((r: Response) => r.json() as Hero[]).catch(this.handleError);
  }

  getHero(id: string): Promise<Hero> {
    const url = `${this.baseUrl}/getHeroDetail/${id}`;
    return this.http.get(url).toPromise().then((response: Response) => response.json() as Hero)
      .catch(this.handleError);
  }

  updateHero(heroObject: Hero): Promise<Hero> {
    const url = `${this.baseUrl}/updateHero`;

    return this.http.post(url, JSON.stringify(heroObject), { headers: this.headers }).toPromise()
      .then(res => heroObject)
      .catch(this.handleError);
  }
  addHero(n: string): Promise<Hero> {
    const url = `${this.baseUrl}/insertHeroes`;
    return this.http.post(url, JSON.stringify([{ name: n }]), { headers: this.headers }).toPromise()
      .then(r => r.json()[0] as Hero)
      .catch(this.handleError);
  }
  delete(id: string): Promise<void> {
    const url = `${this.baseUrl}/removeHero`;
    return this.http.post(url, JSON.stringify({ _id: id }), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
