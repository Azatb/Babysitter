import { Component } from '@angular/core';
import { SittersActions } from './actions/sitters.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(private sittersActions: SittersActions){

  }
  title = 'Velkommen til KEA - Find A Sitter.';
  
  ngOnInit(){
    this.sittersActions.getAllSitters()
  }

}
