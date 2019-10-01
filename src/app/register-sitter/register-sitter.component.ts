import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { Router } from '@angular/router';
import { SittersActions } from '../actions/sitters.actions';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {
  sitterForm: any;
  submitted = false;
  pattern = "[0-9]*"

  constructor(private fb: FormBuilder,
    private router: Router, 
    private sittersActions: SittersActions,
    private login: LoginComponent) { }

  ngOnInit() {
    this.sitterForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      hourlyWage: ['', Validators.required],
      noCriminalRecord: [false,],
      noChildRecord: [false,],
      address: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.pattern)]],
      city: ['', Validators.required]
    })
  }

  onSubmit(sitterForm){
    if(sitterForm.valid){
      this.login.sitterRegCollapsed = true;
      let sitter: Sitter = sitterForm.value;
      sitter.birthDate = new Date(sitter.birthDate);
      this.sittersActions.createSitter(sitter);
    }
    
    console.log(sitterForm);

    this.router.navigate(["/login"])
  }

}
