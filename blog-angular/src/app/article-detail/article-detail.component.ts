import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetailService } from './shared/article-detail.service';

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
  items: [{label: 'New', icon: 'fa-plus'},{label: 'Open', icon: 'fa-download'},{label: 'Undo', icon: 'fa-refresh'}]


  constructor(private route: ActivatedRoute, private articledetailService: ArticleDetailService) {}

  ngOnInit() {
  	  this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getArticle(this.id)
      })
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
                  return true;
            },
            error => {                  
                  return false;
            }
        )  
  }

}
