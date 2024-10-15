import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { match } from 'node:assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registeredUsers: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Retrieve registered users from localStorage
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const users = localStorage.getItem('registeredUsers');
      if (users) {
        this.registeredUsers = JSON.parse(users);
      }
    } else {
      console.log('localStorage is not available');
    }
  }

  onLogin(ref: any): void {
    const userLoginObj = ref.value;

    // Check if the entered username and password match any registered user
    const matchingUser = this.registeredUsers.find(user =>
      user.username === userLoginObj.username && user.password === userLoginObj.password
    );

    if (matchingUser) {
      // Navigate to admin component if credentials match
      this.router.navigateByUrl('/admin');
    } else {
      // Show an alert if credentials are invalid
      alert('Invalid credentials');
    }


    // if (matchingUser) {                        
    //   this.router.navigate(['/admin']);

    // } else {
    //   alert('Invalid Credentilas');
    // }

  }
}