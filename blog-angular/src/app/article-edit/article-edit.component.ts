import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleEditService } from './shared/article-edit.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})

export class ArticleEditComponent implements OnInit {
  article: any[];
  id: number; //Falta pasar el ID desde el HTML
  private sub: any;

  constructor(private route: ActivatedRoute, private articleeditService: ArticleEditService) {}

  ngOnInit() {
	  this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    // In a real app: dispatch action to load the details here.
    this.getArticle(this.id)
    })
  }

  getArticle(id) {
  	this.articleeditService.getArticle(id)
      .subscribe(
        data => {
          this.article = data;
        },
        error => {
          this.article = [];
        }
    )
  }

  updateArticle() {
  	this.articleeditService.updateArticle(this.id, this.article)
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
