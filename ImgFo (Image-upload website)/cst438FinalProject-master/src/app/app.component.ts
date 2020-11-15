
import { Component, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImgFo';

  @Input() userId: string; //= sessionStorage.getItem('email');
  logout(){
    sessionStorage.clear();
    this.ngOnInit();
  }
  login(){
    this.ngOnInit();
  }
  ngOnInit() {
    this.userId = sessionStorage.getItem('email');
  } 

}
