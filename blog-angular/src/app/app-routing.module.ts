import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent }      from './articles/articles.component';
import { ArticleDetailComponent }      from './article-detail/article-detail.component';
import { ArticleNewComponent } from './article-new/article-new.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'index', component: ArticlesComponent },
  { path: 'new', component: ArticleNewComponent },
  { path: 'show/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
