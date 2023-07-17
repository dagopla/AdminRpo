import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/interfaces/register-form.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmited=false;
  public registerForm= this.fb.group({
    name:['David', Validators.required],
    email:['dagopla18@gmail.com',[Validators.required,Validators.email]],
    password:['1234',[Validators.required,Validators.minLength(6)]],
    password2:['1234',Validators.required],
    terminos:[false,Validators.requiredTrue]

  })
   constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formSubmited=true;
    if(this.registerForm.invalid){
      return;
    }
    const {password2,terminos,...body}=this.registerForm.value;
    console.log(body);
    
    this.userService.createUser(body as RegisterForm).subscribe(
      resp=>{
        console.log(resp);
      },
      err=>{
        console.log(err);
      }
    );
  }
  validField(field:string){
    return this.registerForm.get(field)?.invalid && this.formSubmited;
  }
  termsAcepted(){
    return !this.registerForm.get('terminos')?.value && this.formSubmited;
  }
  passwordValid(){
  return this.registerForm.get('password')?.value !== this.registerForm.get('password2')?.value && this.formSubmited;
  }
  

}
