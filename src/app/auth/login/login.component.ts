import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/interfaces/login-form.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  public formSubmited=false;
  public registerForm= this.fb.group({
    email:['dagopla@gmail.com',[Validators.required,Validators.email]],
    password:['1234',Validators.required],
    remember:[false]

  })
  constructor(private router:Router,
    private userService:UserService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.registerForm.value as LoginForm ).subscribe(
      resp=>{
        console.log(resp);
        if(this.registerForm.get('remember')?.value){
          localStorage.setItem('email',this.registerForm.get('email')?.value || '');
        }else{
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/');
      } ,
      err=>{
        console.log(err);
      }
    );
    
  }
}
