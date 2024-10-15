import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registeredUsers: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {

    // Retrieve users from localStorage

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const users = localStorage.getItem('registeredUsers');
      if (users) {
        this.registeredUsers = JSON.parse(users);
      }
    } else {
      console.log('localStorage is not available');
    }
  }

  // Getter for easy access to form fields
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Add the new user to the registeredUsers array
    const newUser = this.registerForm.value;
    this.registeredUsers.push(newUser);

    // Save to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

    // Reset the form
    this.registerForm.reset();
    this.submitted = false;
  }

  // Method to delete a user
  deleteUser(index: number): void {
    this.registeredUsers.splice(index, 1); // Remove user from array
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));  // Update localStorage
  }
  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }
}
