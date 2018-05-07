import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './shared/articles.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  title = "Lista de artículos"
  articles: any[];
  article: any[];
  msgs: Message[] = [];


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

  showSuccessDeleteArticle() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Éxito', detail:'Se ha borrado el artículo'});
  }

  showSuccessErrorArticle() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Error', detail:'No se ha borrado el artículo'});
  }

  deleteArticle(id) {
    this.articlesService.deleteArticle(id)
      .subscribe(
        data => {
          this.showSuccessDeleteArticle();
          this.getArticles();
          return data;                 
        },
        error => {
          this.showSuccessErrorArticle();
          this.articles = [];
        }
      )
  }
}
