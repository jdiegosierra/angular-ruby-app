import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleNewService } from './shared/article-new.service'
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  text: string;
  title: string;
  msgs: Message[] = [];

  constructor(private articlenewService: ArticleNewService) { }

  ngOnInit() {
  }

  createArticle() {   
    this.articlenewService.addArticle(this.text,this.title)
      .subscribe(
        data => {
              this.showSuccessArticle();
              return true;
        },
        error => {                  
              return false;
        }
      )  
  }

  showSuccessArticle() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Artículo creado', detail:'Order submitted'});
  }
}  