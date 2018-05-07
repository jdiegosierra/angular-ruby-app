import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ArticleNewService {

  constructor(private http: Http) { }

  setHeader(): Headers{
    var header=new Headers()
    header.append('Content-Type','application/json'); 
    
    return header;
  }

  addArticle(text: string, title: string):  Observable<boolean>{
    var headers = this.setHeader();
    var obj = { "text": text, "title": title};
    var Mobj = JSON.parse(JSON.stringify(obj));

    return this.http
      .post("http://localhost:3000/articles/",{article: Mobj}, {headers:headers})
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