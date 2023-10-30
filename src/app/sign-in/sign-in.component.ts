import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.less']
})
export class SignInComponent {

  constructor(private http: HttpClient, private coreServices: CoreService, private router: Router) {}

  formData = {
    username: '',
    password: ''
  };
  message = '';
  
  onSubmit(){

    if(true){
      const enteredEmail = this.formData.username;
      this.http.get<any>('http://localhost:3000/login')
    .subscribe( res => {
      const user = res.find((a: any) => {
        return a.email === this.formData.username  && a.password === this.formData.password;
      });

      if(user){
        this.coreServices.openSnackBar('Logined successfully!')
        this.message = 'Logined successfully!';
        this.router.navigate(['/home']);
      }
      else{
        this.message = 'Login failed. Please try again.';
      }
    });
    }
  }

}
