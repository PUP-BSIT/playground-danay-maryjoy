import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { HttpErrorResponse } from '@angular/common/http';
  import { LoginService } from '../../services/login.service';
  import { LoginData } from '../../models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    errorMessage = '';
  
    constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
     // private loginData: LoginData
    ) {}
  
    loginForm: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email,]],
        password: ['', Validators.required]
      });}

      get emailControl() {
        return this.loginForm.get('email');
      }
    
      get passwordControl() {
        return this.loginForm.get('password');
      }
  
    onSubmit() {
      if (!this.loginForm.valid) return;
  
      const loginData: LoginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      this.loginService.loginUser(loginData)
        .subscribe({
          next: (response) => {
            console.log("Response from server: ", response);
            //sessionStorage.setItem('loggedInUser', JSON.stringify(response));
            // Handle success scenario (navigate, set user details, etc.)
            console.log('hello');
          },
          error: (error: HttpErrorResponse) => {
            this.handleError(error);
          }
        });
    }
  
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        this.errorMessage = `Server is unreachable. Please make sure the server is running.`;
        return;
      }
  
      switch (error.status) {
        case 400:
          this.errorMessage = `Bad request. Please check your data.`;
          break;
  
        case 401:
          this.errorMessage = `You have entered an invalid email or password.`;
          break;
  
        case 500:
          this.errorMessage = `Internal server error. Please try again later.`;
          break;
        
        default:
          this.errorMessage = `Error: ${error.status}. Please try again later.`;
      }
    }

}
