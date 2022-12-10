import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  cookieoptions : CookieOptions = {
    path: '/'
  }
  logOut():void{
    this.cookieService.remove('token',this.cookieoptions); 

  }
}
