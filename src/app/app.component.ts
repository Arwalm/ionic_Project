import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'List', url: '/list', icon: 'list' },
    { title: 'Account', url: '/account', icon: 'person' },
    { title: 'About Us', url: '/aboutus', icon: 'flag' },
    { title: 'Login', url: '/login', icon: 'key' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
