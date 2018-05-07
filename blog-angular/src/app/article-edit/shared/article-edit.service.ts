import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticleEditService {

  constructor(private http: Http) { }

  setHeader(): Headers{
    var header=new Headers()
    header.append('Content-Type','application/json'); 
    
    return header;
  }

  getArticle(id): Observable<any[]> {  
    var headers = this.setHeader();
    
    return this.http
      .get("http://localhost:3000/articles/" + id, {headers:headers})
      .map((response: Response) => {
          if (response.status===200)
          {  
            return response.json();
          }
          else
          {                    
            return [];
          }  
      }) 
  }
  updateArticle(id, article):  Observable<boolean>{
    var headers = this.setHeader();
    var obj = { "text": article.text, "title": article.title};
    var Mobj = JSON.parse(JSON.stringify(obj));

    return this.http
      .put("http://localhost:3000/articles/" + id, {article: Mobj}, {headers:headers})
      .map((response: Response) => {
        if (response.status===201)
        {  
          return true;
        }
        else
        {                     
          return false;
        }  
      })
	}
}
