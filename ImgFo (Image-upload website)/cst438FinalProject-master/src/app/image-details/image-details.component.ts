import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ImageService } from '../image.service';

export interface Bookmark {
  imageId: string;
  userId: string;
}

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {
  imgId: string = sessionStorage.getItem('imageId');
  image: Object = null;
  
  userId: string = sessionStorage.getItem('email');
  userId2: string = sessionStorage.getItem('username');
  user: Object;

  imageCreator: Object;

  icon: string = "favorite_border";
  bookmark: Bookmark;

  constructor(private _http: HttpService, private service: ImageService) { }

  ngOnInit() {
    //get viewed image
    this.imgId = sessionStorage.getItem('imageId');
      this._http.getImageById(sessionStorage.getItem('imageId')).subscribe(data => {
        this.image = data[0];           

      //console.log(this.image);
      this.bookmark = {imageId: this.imgId, userId: this.userId};

      //get user who uploaded the image
      this._http.getUserById(this.image['creatorId']).subscribe(data => {
        this.imageCreator = data;
        //console.log(this.imageCreator);
      })
      
      
      //get logged in user who is veiwing the page
      this._http.getUserById(this.userId).subscribe(data => {
        this.user = data;
        //console.log(this.user)
        
        //check if user has bookmark this image
        for (let bmID of Object.values(this.user["bookmarkedId"])) {
          if(bmID === this.image['title']) {
            this.icon = "favorite"
          }
        }
      });
    });    
  }

  onBookmark(){
    if( this.icon === "favorite_border") {
      this.icon = "favorite";
      this._http.bookmark( this.bookmark ).subscribe(data => {
        //console.log(data);
      }); 
    } else {
      this.icon = "favorite_border";
      this._http.unbookmark( this.bookmark ).subscribe(data => {
        //console.log(data);
      });       
    }
  }
}
