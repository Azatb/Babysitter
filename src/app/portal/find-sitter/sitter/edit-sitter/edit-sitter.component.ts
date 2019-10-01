import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SittersActions } from 'src/app/actions/sitters.actions';
import { Sitter } from 'src/app/entities/sitter';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {
  sitterForm: any;
  pattern = "[0-9]*"
  loading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private sittersAction: SittersActions) { }

  ngOnInit() {
    this.loading = false
    let sitterId = localStorage.getItem("editSitterId");
    if (!sitterId) {
      alert("Invalid action");
      this.router.navigate(['portal/findsitter']);
    }
    else {
      let sitter = this.sittersAction.getSitter(sitterId);
      let bdate = new Date(sitter.birthDate).toISOString().substring(0, 10);
      console.log('Edit sitter before: ' + sitter)
      this.sitterForm = this.fb.group({
        username: [sitter.username, Validators.required],
        password: [sitter.password, Validators.required],
        name: [sitter.name, Validators.required],
        gender: [sitter.gender, Validators.required],
        birthDate: [bdate, Validators.required],
        hourlyWage: [sitter.hourlyWage, Validators.required],
        noCriminalRecord: [sitter.noCriminalRecord,],
        noChildRecord: [sitter.noChildRecord,],
        address: [sitter.address, Validators.required],
        zipcode: [sitter.zipcode, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.pattern)]],
        city: [sitter.city, Validators.required]
      });
    }
  }

  onSubmit(sitterForm) {
    console.log(sitterForm.valid)
    if (sitterForm.valid) {
      this.sittersAction.updateSitter(sitterForm.value)
      this.router.navigate(["/portal/findsitter"])
    }
  }

}
