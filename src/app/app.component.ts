import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  hide=false;
  togleHide(){
    this.hide=!this.hide
  }
  onClick(){
    console.log('data');
  }
}
