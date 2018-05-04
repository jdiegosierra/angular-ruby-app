import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './shared/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  title = "Lista de artículos"
  articles: any[];
  article: any[];


  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  	this.getArticles();
  }

  getArticles() {
  	this.articlesService.getArticles()
        .subscribe(
            data => {
              this.articles = data;
            },
            error => {
              this.articles = [];
            }
      )
  }

  deleteArticle(id) {
    this.articlesService.deleteArticle(id)
        .subscribe(
            data => {
              this.getArticles();
              return data;                 
            },
            error => {
              this.articles = [];
            }
        )
  }

  onClickMe() {
    this.title = 'You are my hero!';
  }

}
