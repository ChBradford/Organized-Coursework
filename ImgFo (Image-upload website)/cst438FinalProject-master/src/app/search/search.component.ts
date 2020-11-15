import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ImageService } from '../image.service';

export interface Bookmark {
  imageId: string;
  userId: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userId: string = sessionStorage.getItem('email');
  user: Object;
  
  id: string;

  //creatorUsernames: string[] = new Array();
  bookmarkedImgs: Object[] = new Array();
  
  BMUsernames: string[] = new Array();
  bookmarkedCreators: Object[] = new Array();

  //icon: string = "favorite"; //favorite_border
  BookmarkMap: Map<string, string> = new Map<string, string>();
  bookmark: Bookmark;

  constructor(private _http: HttpService, private service: ImageService) { }

  ngOnInit() {
      //get the users bookedmarked images ids
      this._http.getUserById(this.userId).subscribe(data => {
        this.user = data;
        console.log(data);
        //get the images from the ids
        for (let [i, img] of Object.values(this.user['bookmarkedId']).entries()) {
          //console.log(img);
          //this.id = JSON.stringify(img);
          //console.log(this.id);
          //JSON.parse(this.id)
          this._http.getImageById(img.toString()).subscribe(data => {
            //console.log(img.toString());
            console.log(data);
            this.bookmarkedImgs[i] = data[0];
            this.BookmarkMap.set(this.bookmarkedImgs[i]['title'], "favorite")
            //get the creator's user name
            this._http.getUserById(data[0]['creatorId']).subscribe(data => {
              console.log(data);
              this.bookmarkedCreators[i] = data;
              this.BMUsernames[i] =  this.bookmarkedCreators[i]['username'];
            });
          });
        }        
      });     
    }     

  imageClick(imgId: string) {
    this.service.setImgId(imgId);
  }
  
  onBookmark(imgId: string){
    this.bookmark = {imageId: imgId, userId: this.userId};
    console.log(this.BookmarkMap.get(imgId));
    if( this.BookmarkMap.get(imgId) === "favorite_border" ) {
      this.BookmarkMap.set(imgId, "favorite");                  //left off here!
      this._http.bookmark( this.bookmark ).subscribe(data => {
        //console.log(data);
      }); 
    } else {
      this.BookmarkMap.set(imgId, "favorite_border");
      this._http.unbookmark( this.bookmark ).subscribe(data => {
        //console.log(data);
      });       
    }
  }

}
