import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../../entities/sitter';
import { SittersActions } from 'src/app/actions/sitters.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.scss']
})
export class SitterComponent implements OnInit {
  @Input() sitterInput: Sitter;
  @Output() sitterDetailsClicked: EventEmitter<any> = new EventEmitter<any>();

  noChildRecord: string = "";
  noCriminalRecord: string = "";

  constructor(private sittersActions: SittersActions, private router: Router) { }

  ngOnInit() {
    if(this.sitterInput.noChildRecord == true){
      this.noChildRecord = "NO";
    }
    else{
      this.noChildRecord = "!!ALERT-> YES <-ALERT!!"
    }

    if(this.sitterInput.noCriminalRecord == true){
      this.noCriminalRecord = "NO";
    }
    else{
      this.noCriminalRecord = "!!ALERT-> GANGSTER <-ALERT!!"
    }
  }

  onSitterDetailsClicked(sitter: Sitter){
    this.sitterDetailsClicked.emit(sitter);
  }

  calculateAge(date: string){
    var d = new Date(date)
    var dateDifference = Date.now() - d.getTime();
    var ageDate = new Date(dateDifference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  deleteSitter(sitter: Sitter){
    
    this.sittersActions.deleteSitter(sitter);
    console.log('DELETED SITTER: ' + sitter.name);
  }

  editSitter(sitter: Sitter){
    localStorage.removeItem("editSitterId");
    localStorage.setItem("editSitterId", sitter._id);
    this.router.navigate(['portal/editsitter']); 
  }

}
