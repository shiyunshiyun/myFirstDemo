// ng g service hero 创建service服务
import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
