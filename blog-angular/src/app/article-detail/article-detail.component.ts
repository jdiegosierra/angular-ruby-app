import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArticleDetailService} from './shared/article-detail.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any[];
  id: number;
  numero: number;
  private sub: any;
  title = "Lista de artículos"
  articles: any[];


  constructor(private route: ActivatedRoute, private articlesdetailService: ArticleDetailService) {}

  ngOnInit() {
  	   this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       this.getArticle(this.id)
    });
  }

  getArticles() {
  	this.articlesdetailService.getArticles()
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
    this.articlesdetailService.deleteArticle(id)
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

  getArticle(id) {
  	this.articlesdetailService.getArticle(id)
        .subscribe(
            data => {
              this.article = data;
            },
            error => {
              this.article = [];
            }
      )
  }

}
