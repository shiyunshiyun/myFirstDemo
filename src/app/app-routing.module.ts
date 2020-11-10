import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'article', component: ArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }