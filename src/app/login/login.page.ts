import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {email:null, password:null}

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user);
  }
}
