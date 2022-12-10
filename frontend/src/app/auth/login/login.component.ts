import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import { UserI } from 'src/app/models/user';
import {NgForm} from '@angular/forms';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private cookieService: CookieService,private authService: AuthService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  onLogin(form:NgForm):void{
    
    
    this.authService.login(form.value).subscribe(res => {
      this.cookieService.put('token', res.body);
      this.router.navigateByUrl('/auth/dashboard'); //mandar a otro lado despues de loguear

    });
  }

  goRegistry(form:NgForm):void{
      this.router.navigateByUrl('/auth/register'); //mandar a otro lado despues de loguear
  }


}
