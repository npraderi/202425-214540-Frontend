import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesService } from './services/expenses.service';
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesService } from './services/categories.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CookieModule } from 'ngx-cookie';
import { DateRangePickerFormsExample } from './material/datePicker/date-range-picker-forms-example';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpensesComponent,
    CategoriesComponent,
    SettingsComponent,
    NavbarComponent,
    DateRangePickerFormsExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    CookieModule.withOptions()
  ],
  exports:[
    MatFormFieldModule
  ],
  providers: [ExpensesService,CategoriesService,DatePipe],
  bootstrap: [AppComponent,DateRangePickerFormsExample]
})
export class AppModule { }
