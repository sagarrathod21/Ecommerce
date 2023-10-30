import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder, 
    private services: ServicesService,
    private coreServices: CoreService,
    private router: Router
    ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,25}')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password: [''],
      Phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    })
  }


  onSubmit(){

    if(true){
      const enteredEmail = this.form.value.email;
      this.http.get<any>('http://localhost:3000/login')
    .subscribe( res => {
      const user = res.find((a: any) => {
        return a.email === this.form.value.email;
      });

      if(user){
        this.coreServices.openSnackBar('Email already exists!')
      }
      else{
        this.services.addPost(this.form.value).subscribe({
          next: (val: any) =>{
            this.coreServices.openSnackBar('Your data added Successfully!')
            this.router.navigate(['/sign-in']);
          },
          error: (err: any) =>{
            console.error(err);
          }
        })
      }
    });
    }
  }
}
