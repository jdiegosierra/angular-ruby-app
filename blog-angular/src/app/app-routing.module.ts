import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent }      from './articles/articles.component';
import { ArticleDetailComponent }      from './article-detail/article-detail.component';

const routes: Routes = [
  { path: 'edit', component: ArticlesComponent },
  { path: 'create', component: ArticlesComponent },
  { path: 'see/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
