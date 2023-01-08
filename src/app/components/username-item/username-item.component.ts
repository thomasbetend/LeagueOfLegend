import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-item',
  templateUrl: './username-item.component.html',
  styleUrls: ['./username-item.component.css']
})
export class UsernameItemComponent {

  username?: string | null;

  constructor(private router: Router){
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    };
  }
  onResetGame() {
    this.router.navigate(['/']);
    localStorage.clear();
  }
}
