import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  userId: string = sessionStorage.getItem('email');
  user: Object;

  imgId: string[] = [];

  dailyRanking: Object;
  DRUsernames: string[] = [];
  DRUser: Object;

  popRanking: Object;
  PRUsernames: string[] = [];
  PRUser: Object;

  recommended: Object;
  RecUsersnames: string[] = [];
  RecName: Object;

  constructor(private _http: HttpService, private service: ImageService){}

  ngOnInit() {
    //get logged in user
    this._http.getUserById(this.userId).subscribe(data => {
      this.user = data;
      //console.log(this.user);
      if (sessionStorage.getItem('newLogin') === "true") {
        sessionStorage.setItem('newLogin', "false");
        location.reload();
      }
    });     
  
    //setup daily rankings with corresponding usernames 
      this._http.getDailyRankings().subscribe(data => {
        this.dailyRanking = data;
        for (let [i, img] of Object.values(this.dailyRanking).entries()) {
          this._http.getUserById(img['creatorId']).subscribe(data => {
            this.DRUser = data;
            //console.log(data);
            this.DRUsernames[i] = this.DRUser['username'];
            this.imgId[i] = img['creatorId'];
          });
        }
      });

    //setup popularity rankings with corresponding creator usernames
    this._http.getPopularRankings().subscribe(data => {
      this.popRanking = data;
      for (let [i, img] of Object.values(this.popRanking).entries()) {
        this._http.getUserById(img['creatorId']).subscribe(data => {
          this.PRUser = data;
          //console.log(data);
          this.PRUsernames[i] = this.PRUser['username'];
        });
      }
    });  

      //setup recommended with corresponding creator usernames 
      this._http.getRecommended(this.userId).subscribe(data => {
        this.recommended = data;
        for (let [i, img] of Object.values(this.recommended).entries()) {
          this._http.getUserById(img['creatorId']).subscribe(data => {
            this.RecName = data;
            //console.log(data);
            this.RecUsersnames[i] = this.RecName['username']
          });
        } 
      });
    }

    imageClick(imgId: string) {
      this.service.setImgId(imgId);
    }
}
