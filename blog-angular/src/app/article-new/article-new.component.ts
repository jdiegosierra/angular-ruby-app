import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleNewService } from './shared/article-new.service'

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  text: string;
  title: string;

  constructor(private articlenewService: ArticleNewService) { }

  ngOnInit() {
  }

  createArticle() {   
    this.articlenewService.addArticle(this.text,this.title)
        .subscribe(
            data => {
                  return true;
            },
            error => {                  
                  return false;
            }
        )
  

}
