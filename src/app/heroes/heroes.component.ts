// import { MessageService } from './../../../.history/src/app/message.service_20200925172143';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { HEROES } from '../mock-hero';
// import { HeroService } from '../../../.history/src/app/hero.service_20200925165320';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  // hero: any =  'Windstorm';
  // hero2: Hero = {
  //   id: 1,
  //   name: 'Windstorm2'
  // };
  // hero3 = HEROES
  hero3: Hero[];

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: selected hero id = ${hero.id}` );
  // }

  getHeroes(): void {
    // this.hero3 = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => {
      this.hero3 = heroes;
    });
  }
}
