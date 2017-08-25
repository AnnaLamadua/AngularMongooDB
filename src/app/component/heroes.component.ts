import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

// So far, I gues components are Views actually
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: "heroes.component.html",
  styleUrls: ["heroes.component.css"]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroList: Hero[];
  constructor(private heroService: HeroService, private router: Router) { }
  ngOnInit(): void {
    this.getHeroesFromService();
  }
  onSelect(t: Hero): void {
    this.selectedHero = t;
  }
  // gotoDetail() {
  //   this.router.navigate(['/detail', this.selectedHero.id])
  // }
  gotoDetail(heroid: string): void {
    this.router.navigate(['/detail', heroid])
  }
  getHeroesFromService(): void {
    this.heroService.getHeroes().then(x => this.heroList = x);
    // this.heroService.getHeroesSlowly().then(x => this.heroList = x);
  }
  add(name: string) {
    name = name.trim();
    if (!name) return;

    return this.heroService.addHero(name).then(x => { this.heroList.push(x); this.selectedHero = null; })
  }
  delete(id: string) {
    return this.heroService.delete(id).then(x => {
      this.heroList = this.heroList.filter(v => v._id !== id);
      if (this.selectedHero && this.selectedHero._id === id) this.selectedHero = null;
    });
  }
}
