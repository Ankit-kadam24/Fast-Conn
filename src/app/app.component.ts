import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public myHide = true
  
  public toggleHide(){
    setTimeout(() => {
      this.myHide = !this.myHide
    }, 3000);
  }
  ngOnInit(){
    this.toggleHide()
  }
  
  title = 'telecom';
}
