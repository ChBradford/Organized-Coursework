import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Allimages: Object;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    
    //call API to wakeup Heroku as soon as possible! 
    this._http.getAll().subscribe(data => {
      this.Allimages = data;
    });  

  }

}
