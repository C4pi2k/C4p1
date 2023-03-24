import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { CodingPlaygroundComponent } from './views/coding-playground/coding-playground.component';
import { MainComponent } from './views/main/main.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  },
  {
    path: 'codingplayground',
    component: CodingPlaygroundComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'error',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
