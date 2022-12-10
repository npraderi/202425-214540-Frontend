import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseI } from '../models/expense';
import { ExpensesService } from '../services/expenses.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryResponse } from '../models/category';
import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  formVar: FormGroup;
  expense: ExpenseI;  
  categories : any = [];
  apikey = this.cookieService.get('apikey')||'';
  constructor(private expenseServices: ExpensesService,private cookieService: CookieService, private httpClient: HttpClient, private fb: FormBuilder) { }
  CATEGORIES_SERVER: string = 'http://localhost:3000/api/categories'
  ngOnInit(): void {
    this.formVar = this.fb.group({
      amount: '',
      expenseDate: '',
      categoryName: '',
      description: ''
    });
    this.getCategories();
    
  }





  requestOptions = {
    headers: new HttpHeaders({'x-api-key':this.apikey}),
  };

  onSubmit() {
    this.expense = this.formVar.value;
    this.expenseServices.post(this.expense).subscribe(res => {console.log(res);});
  }

  getCategories() {
    return this.httpClient.get<CategoryResponse>((`${this.CATEGORIES_SERVER}`), this.requestOptions).subscribe((res) => {this.categories = res.body});
  }

}
