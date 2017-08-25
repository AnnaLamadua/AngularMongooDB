import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero'
import { HeroService } from '../services/hero.service';

// this is view detail
@Component({
  moduleId: module.id,
  selector: "my-hero-detail",
  templateUrl: "hero-detail.component.html",
  styleUrls: ["hero-detail.component.css"]
})

// This is controller
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.params.switchMap((paramArr: Params) => this.heroService.getHero(paramArr['id']))
      .subscribe(h => this.hero = h)
  }
  goBack(): void {
    this.location.back();
  }
  saveChanges() {
    this.heroService.updateHero(this.hero).then(x => this.goBack())
  }
}