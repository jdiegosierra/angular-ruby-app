import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetailService } from './shared/article-detail.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

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
  body: string;
  articles: any[];
  comments: any[];
  commenter: string;
  msgs: Message[] = [];

  constructor(private route: ActivatedRoute, private articledetailService: ArticleDetailService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    // In a real app: dispatch action to load the details here.
    this.getArticle(this.id)
    })
  }

  showSuccessCreateComment() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Éxito', detail:'Se ha escrito el comentario'});
  }
  showSuccessDeleteComment() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Éxito', detail:'Se ha borrado el comentario'});
  }

  showErrorCreateComment() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'ERROR', detail:'No se ha podido crear el comentario'});
  }

  showErrorDeleteComment() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'ERROR', detail:'No se ha podido borrar el comentario'});
  }

  getArticles() {
  	this.articledetailService.getArticles()
      .subscribe(
        data => {
          this.articles = data;
        },
        error => {
          this.articles = [];
        }
    )
  }

  getComments() {
    this.articledetailService.getComments(this.id)
      .subscribe(
        data => {
          this.comments = data;
        },
        error => {
          this.comments = [];
        }
    )
  }

  deleteArticle(id) {
    this.articledetailService.deleteArticle(id)
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
  	this.articledetailService.getArticle(id)
      .subscribe(
        data => {
          this.article = data;
        },
        error => {
          this.article = [];
        }
    )
  }

  createComment() {   
    this.articledetailService.createComment(this.id, this.commenter,this.body)
      .subscribe(
        data => {
          this.showSuccessCreateComment();
          this.getComments();
          return true;
        },
        error => {
          this.showErrorCreateComment();                  
          return false;
        }
      )  
  }

  deleteComment(idc) {
    this.articledetailService.deleteComment(idc)
      .subscribe(
        data => {
          this.showSuccessDeleteComment();
          this.getComments();
          return data;                 
        },
        error => {
          this.showErrorDeleteComment();
          this.comments = [];
        }
      )
}

}
