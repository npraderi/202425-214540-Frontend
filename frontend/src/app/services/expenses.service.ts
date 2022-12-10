import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ExpenseI, ExpenseResponse } from '../models/expense';
import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class ExpensesService {
  EXPENSES_SERVER: string = 'http://localhost:3000/api/expenses'
  expensesSubject = new BehaviorSubject(false);
  
  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.cookieService.get('token'),
    'x-api-key': this.cookieService.get('apikey') || ''
  }); 

  expensesUrl = `${this.EXPENSES_SERVER}`;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { 
  }


  getAll() : Observable<ExpenseResponse> {   
    return this.httpClient.get<ExpenseResponse>(this.expensesUrl,{headers:this.header});
  }

  getAllByDate(initialDate:string,finalDate:string) : Observable<ExpenseResponse> {   
    return this.httpClient.get<ExpenseResponse>(this.expensesUrl+`?dateIni=${initialDate}&dateEnd=${finalDate}`,{headers:this.header});
  }

  post(expense : ExpenseI) : Observable<any>  {
    console.log("lo imprimo",expense);
    return this.httpClient.post<ExpenseI>(`${this.EXPENSES_SERVER}`,expense,{headers:this.header});
  }

}
