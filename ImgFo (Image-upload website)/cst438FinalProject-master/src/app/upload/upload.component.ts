import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatChipInputEvent} from '@angular/material/chips';
import { HttpService } from '../http.service';

export interface Tag {
  phrase: string;
}

export interface PostBody {
  creatorId: string;
  imageURL: string;
  title: string;
  description: string;
  //tags: Tag[];
  tags: Object;
}
//console.log(this.userId, this.imgUrl, this.titleInput, this.descInput, this.tags);
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  //vars for uploading to imgur
  selectedFile: File = null;
  img: Object = null;
  status: string = "";
  exampleImg: string = "https://i.imgur.com/kUDCd8d.png";
  validUpload: boolean = false;


  //vars for tag chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [];
  constructor(private http: HttpClient, private _http: HttpService){}

  //vars for posting
  userId: string = sessionStorage.getItem('email');
  imgUrl: string;
  titleInput: string;
  descInput: string;
  postBody: PostBody;

  tagArray: string[] = new Array();
  id: string;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({phrase: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  
  // Get file from user
  onFileSelected(event){
    this.validUpload = false;
    this.status = "";
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile != null) {
      this.status = "processing in progress…"
    
      let clientId = '1e5e1673e6830a4';
      let headers = new HttpHeaders({
        'Authorization': 'Client-ID '+ clientId
  
         });
      let options = { headers: headers };    
      
      const fd = new FormData();
      fd.append('image', this.selectedFile )
      
      
      this.http.post('https://api.imgur.com/3/image',this.selectedFile, options).subscribe(res => {
        this.img = res;
        this.exampleImg = this.img['data']['link'];
        this.validUpload = true;
        
      },
        err => {
          this.status = err['error']['data']['error'];
          this.validUpload = false;
          this.exampleImg = "https://i.imgur.com/kUDCd8d.png"
        },
        () => {
          this.status = "Image processing complete";
          
        });
      this.selectedFile = null;
    } else {
      this.status = "Please choose a file";
    } 
  }

  ngOnInit() {

  }

  onPost(){
    this.imgUrl = this.exampleImg;    
    //console.log(this.userId, this.imgUrl, this.titleInput, this.descInput, this.tags);
    //this.postBody = {creatorId: this.userId, imageURL: this.imgUrl, title: this.titleInput, description: this.descInput, tags: this.tags }
    console.log(this.tags);
    for (let key of Object.keys(this.tags)) {
      let phrase = this.tags[key];
      this.tagArray.push(phrase['phrase'])
      console.log(this.tagArray);
    }

    //console.log(this.userId, this.imgUrl, this.titleInput, this.descInput, this.tags);
    this.postBody = {creatorId: this.userId, imageURL: this.imgUrl, title: this.titleInput, description: this.descInput, tags: this.tagArray }

    this._http.postImage(this.postBody).subscribe(data => {
      //console.log(data);
    });
    // this._http.postImage(this.userId, this.imgUrl, this.titleInput, this.descInput, this.tags).subscribe(data => {
    //   sessionStorage.setItem('imageId', this.userId);
    // });
    this._http.setCreatorId(this.titleInput, this.userId).subscribe(data => {
      //console.log(data);
      
    });
    this._http.getImageById(this.titleInput).subscribe(data => {
      //console.log(data);
      //sessionStorage.setItem('title', data['title']);
    });
    sessionStorage.setItem('imageId', this.titleInput);
    sessionStorage.setItem('title', this.titleInput);
  }

}