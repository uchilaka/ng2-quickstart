import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

// @EXAMPLE needed for mock HERO resolution of starter `getHeroes()` service method
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes'; // URL to web api

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    //getHeroes(): void { } // stub

    /*
    // @EXAMPLE with mock heroes script
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    */

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only 
        return Promise.reject(error.message || error);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    /*
    // @EXAMPLE simulation getting single hero - needs to be less wasteful for real endpoint access
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    */

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay 
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
}