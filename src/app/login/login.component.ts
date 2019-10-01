import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any; // variable
  submitted = false;
  public babyRegCollapsed: boolean = true;
  public sitterRegCollapsed: boolean = true;

  
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { } // fb bruger til at lave validators
  // i logi.html
  
  ngOnInit() {
    this.loginForm = this.fb.group({ // login form bliver brugt i login.html
      username: ['', Validators.required], // Validators.minLength(5)
      password: ['', Validators.required]
    })
  }
  
  onSubmit(loginForm){
    if(loginForm.valid){
      // Send request to back-end to validate login.
      this.loginService.login().subscribe(result =>{
        // Navigate based on a certain condition.
        this.router.navigate(["/portal/findsitter"])
      })
     
    }
    else{
      // Punish user for not filling out fields.
    }
    console.log(loginForm);
  }
  

  clickEventBabyReg(){
    if(this.sitterRegCollapsed == false){
      this.sitterRegCollapsed = true;
    }
    this.babyRegCollapsed = !this.babyRegCollapsed;       
  }

  clickEventSitterReg(){
    if(this.babyRegCollapsed == false){
      this.babyRegCollapsed = true;
    }
    this.sitterRegCollapsed = !this.sitterRegCollapsed;
  }

}
