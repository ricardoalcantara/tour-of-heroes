import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html' ,
  styleUrls:[ 'app/heroes.component.css' ],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  constructor(private router: Router, private heroService: HeroService) { }

  title = 'Tour of Heroes'
  selectedHero: Hero;

  heroes: Hero[];

  gotoDetail(hero: Hero) {
      let link = ['HeroDetail', { id: this.selectedHero.id}];
      this.router.navigate(link);
  }

  getHeroes() {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
