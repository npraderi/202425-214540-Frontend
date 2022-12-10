import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { CategoriesComponent } from '../categories/categories.component';
import { SettingsComponent } from '../settings/settings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'expenses', component: ExpensesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
