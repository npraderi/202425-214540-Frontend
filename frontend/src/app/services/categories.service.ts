import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryI, CategoryResponse } from '../models/category';

@Injectable()
export class CategoriesService {
  
  CATEGORIES_SERVER: string = 'http://localhost:3000/api/categories'
  categoriesSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  headerDict = {
    'x-api-key': this.cookieService.get('apikey') || ''
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  categoriesUrl = `${this.CATEGORIES_SERVER}`;

  getTop(): Observable<CategoryResponse> {
    return this.httpClient.get<CategoryResponse>((`${this.CATEGORIES_SERVER}/spent`),this.requestOptions);
  }

  getAll(): Observable<CategoryResponse> {
    return this.httpClient.get<CategoryResponse>((`${this.CATEGORIES_SERVER}/`),this.requestOptions);
  }


}
