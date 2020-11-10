import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  // heroes: Hero = { // 使用Hero类，并初始化他
  //   id: 1,
  //   name: 'shiyun',
  // };

  // hero = HEROES;
  hero: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero) {
    console.log('hero', hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // getHeroes(): void {
  //   this.hero = this.heroService.getHeroes();
  // }

  // HeroService.getHeroes 方法之前返回一个 Hero[]， 现在它返回的是 Observable<Hero[]>。
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.hero = heroes)
  }
}
