import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CgnewsapiService {

  constructor(private _http:HttpClient) { }

// Top headlines Api URL 
 topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=d8d6f5125f7648a6925edb6aa33d6a9e';

// Tech News Api URL
 techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d8d6f5125f7648a6925edb6aa33d6a9e'

// Health News Api URL 
healthNews='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d8d6f5125f7648a6925edb6aa33d6a9e'

// Business News Api URL
businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d8d6f5125f7648a6925edb6aa33d6a9e'

// Create method for cg Headlines
cgHeadlines():Observable<any>{
  return this._http.get(this.topHeadlinesNews)
} 

// Create method for cg Tech
cgTechNews():Observable<any>{
  return this._http.get(this.techNews)
}

// Create method for cg Health
cgHealthNews():Observable<any>{
  return this._http.get(this.healthNews)
}

// Create method for cg Business
cgBusinessNews():Observable<any>{
  return this._http.get(this.businessNews)
}

}
