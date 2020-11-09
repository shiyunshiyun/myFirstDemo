import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from '../mock-heroes';

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

  hero = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero) {
    console.log('hero', hero);
    this.selectedHero = hero;
  }
}
