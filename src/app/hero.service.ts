import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
