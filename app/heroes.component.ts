import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  // @NOTE see [(ngModel)] section of template for two-way binding syntax
  templateUrl: './heroes.component.html',
  // embedded styling for this component 
  // @TODO explore how to make this global to the project somehow
  styleUrls: ['./heroes.component.css'],
  //providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  // teach the component about the HeroService
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { };

  ngOnInit(): void {
    this.getHeroes();
  };

  getHeroes(): void {
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  title = 'Tour of Heroes';
  // type of heroes property is inferred from HEROES const (array of Hero class instances)
  // the `:` notation refers to unitialized properties
  heroes: Hero[];
  // explicitly declared type of `selectedHero` property (Hero class)
  // `selectedHero` is property for storing the selected hero passed through the binding function
  selectedHero: Hero;
  // binding function to template click action to select hero (see li in list template)
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
