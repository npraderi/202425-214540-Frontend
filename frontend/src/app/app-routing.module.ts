import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'/auth/login', pathMatch:'full'},
  {path:'auth', loadChildren: (() => import('./auth/auth.module').then(x => x.AuthModule))},
  /*
    {path: 'register', component: RegisterComponent},
    {path:'', redirectTo:'/auth/login', component: LoginComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'expenses', component: ExpensesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'dashboard', component: DashboardComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
