import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  babyForm: any;
  submitted = false;
  pattern = "[0-9]*"
  constructor(private fb: FormBuilder, private login: LoginComponent, private router: Router) { }

  ngOnInit() {
    this.babyForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.pattern)]],
      city: ['', Validators.required]
    })
  }
    
  onSubmit(babyForm){
    if(babyForm.valid){

    }
    else{

    }
    console.log(babyForm);
    this.login.babyRegCollapsed = true;
    this.router.navigate(["/login"])

  }

}
