import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username?: string | null;

  constructor(private router: Router){
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    };
  }

}
