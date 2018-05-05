import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ArticleDetailService {

  constructor(private http: Http) { }

  setHeader(): Headers{
    var header=new Headers()
    header.append('Content-Type','application/json'); 

    return header;
  }

  getArticles(): Observable<any[]> {
    
    var headers = this.setHeader();
    
    return this.http
            .get("http://localhost:3000/articles/", {headers:headers})
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

  getComments(id): Observable<any[]> {
    
    var headers = this.setHeader();
    
    return this.http
            .get("http://localhost:3000/articles/" + id + "/comments/", {headers:headers})
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

  deleteArticle(id):  Observable<Boolean>{
    var headers = this.setHeader();     

    return this.http
              .delete("http://localhost:3000/articles/" + id,{headers:headers})
              .map((response: Response) => {
                    if (response.status===204)
                    {  
                      return true;
                    }
                    else
                    {                    
                      return false;
                    }  
              })
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

  createComment(id, commenter, body):  Observable<boolean>{
      var headers = this.setHeader();
      var obj = { "commenter": commenter, "body": body};
      var Mobj = JSON.parse(JSON.stringify(obj));

      return this.http
                .post("http://localhost:3000/articles/" + id + "/comments",{comment: Mobj}, {headers:headers})
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
