import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
    })
  }

  submitUser() {
    console.log(this.userForm.value.username);
    localStorage.setItem('username', this.userForm.value.username);
    this.router.navigate(['/game']);
  }

}
