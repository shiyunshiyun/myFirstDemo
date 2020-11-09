import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero: Hero;
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    // route.snapshot是路由的静态快照，抓取自组件刚刚创建完毕之后
    // snapshot是一个从URL提取的路由参数值的字典，id对应的值就是获取的英雄的id
    // 路由参数总会是字符串，js的(+)操作符会将字符串转换成数字，英雄的id就是数字类型
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // 添加goBack()方法，利用在以前注入的location服务在浏览器的历史栈中后退一步
  goBack() {
    this.location.back();
  }
}
