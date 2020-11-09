import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// 让该应用具有路由功能
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component'

const routes: Routes = [
  // path：用来匹配浏览器地址栏中的URL字符串
  // component：导航到该路由时，应该创建的组件
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

// @NgModule元数据会初始化路由器，并开始监听浏览器中URL的变化
@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
