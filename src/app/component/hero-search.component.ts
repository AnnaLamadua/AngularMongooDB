import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroService } from '../services/hero.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css']
    // providers: [HeroService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchAutocompleteOptoins = new Subject<string>();

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchAutocompleteOptoins.next(term);
    }

    constructor(private heroService: HeroService, private router: Router) { }
    ngOnInit(): void {
        this.heroes = this.searchAutocompleteOptoins
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([])).catch(err => {
                    // TODO: real error handling
                    console.log(err);
                    return Observable.of<Hero[]>([]);
                })

    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }

}