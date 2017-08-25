import { Component, OnInit } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from '../services/hero.service'

@Component({
    moduleId: module.id,
    selector: "my-dashboard",
    templateUrl: "dashboard.component.html",
    styleUrls: ["dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
    topHeroList: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(x => {if (x.length) this.topHeroList = x.slice(0, 5) })
    }
}