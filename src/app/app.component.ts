import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdTask';

  isDisplay=false;
  log:number[]=[];

  onDisplay(){
    this.isDisplay=!this.isDisplay;
    this.log.push(this.log.length+1);
  }

}
