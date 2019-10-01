import { Component, OnInit } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { Router } from '@angular/router';
import { IAppState } from '../../stores/store';
import { NgRedux } from '@angular-redux/store';


@Component({
  selector: 'app-find-sitter',
  templateUrl: './find-sitter.component.html',
  styleUrls: ['./find-sitter.component.scss']
})
export class FindSitterComponent implements OnInit {
  sitters: Sitter[];
  
  constructor(private router: Router,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
   
    //------------------------------------
    this.ngRedux.select(state => state.sitters)
    .subscribe((sitterState) => {
      this.sitters = sitterState.sitters;
    });
    
  }
}
