import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userId: string = sessionStorage.getItem('username');
  user: Object;

  //Allimages are what the data is being stored in. You'll see this in the HTML as well.
  Allimages: Object;
  Usernames: string[] = [];
  User: Object;
  //this was here for testing purposes.
  Searched: Boolean;
  
  constructor(private _http: HttpService, private service: ImageService){}

  ngOnInit() {
    this.Searched = false;
    //get logged in user
    this._http.getUserById(this.userId).subscribe(data => {
      this.user = data;
      //console.log(this.user);
    });   
    //mock getAll() call (for now)
    //TODO: real getAll call
    this._http.getAll().subscribe(data => {
      this.Allimages = data;
      for (let [i, img] of Object.values(this.Allimages).entries()) {
        this._http.getUserById(img['creatorId']).subscribe(data => {
          this.User = data;
          this.Usernames[i] = this.User['username'];
        });
      }
    });
  }

  //Heavens-forbid this work. We all know what we hath forsaken. . .
  search(){
    //Saving the value that's in the search box in the page. Can be used to
    //send the query to the search function on the backend and it should theoretically work.
    var inputValue = (<HTMLInputElement>document.getElementById("searchbar")).value;
    (document.getElementById("barname").innerHTML = inputValue);
    if(inputValue == ""){
      //This is just for resetting the top bar and going back to all images.
      //Considered gold-plating unless it's breaking something
      document.getElementById("barname").innerHTML = "All Images";
      //mock getAll() call (for now)
      //TODO: Real getAll call
      this._http.getAll().subscribe(data => {
        this.Allimages = data;
        for (let [i, img] of Object.values(this.Allimages).entries()) {
          this._http.getUserById(img['creatorId']).subscribe(data => {
            this.User = data;
            this.Usernames[i] = this.User['username'];
          });
        }
      });
    }
    else{
    // Below can be removed once backend is put in, here for testing and mock-up demo purposes
    this._http.getImageById(inputValue).subscribe(data => {
      this.Allimages = data;
      for (let [i, img] of Object.values(this.Allimages).entries()) {
        this._http.getUserById(img['creatorId']).subscribe(data => {
          this.User = data;
          this.Usernames[i] = this.User['username'];
        });
      }
    });
    //TODO: call backend function to get what is searched for...? 
    //From there HTML *should* solve the rest automatically via refresh of the divs.


    }
  }
  
  imageClick(imgId: string) {
    this.service.setImgId(imgId);
  }
}
