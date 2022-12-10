import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import { UserI } from 'src/app/models/user';
import {NgForm} from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private cookieService: CookieService, private authService: AuthService, private router:Router) { 
  }

  getCookie(key: string){
    return this.cookieService.get(key);
  }

  ngOnInit(): void {
  }

  onRegister(form:NgForm):void{
    form.value.role="ADMIN";
    this.authService.register(form.value).subscribe(res => {
      console.log("RECIBI EL TOKEN", res);
      this.cookieService.put('apikey', res.body.family.apiKey);
      
      this.router.navigateByUrl('/auth/login'); //mandar a otro lado despues de loguear

    });
  }

  goLogin(form:NgForm):void{
      this.router.navigateByUrl('/auth/login'); //mandar a otro lado despues de loguear
  }

}
