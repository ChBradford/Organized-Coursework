import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imgId: string = "";

  constructor() { }

  getImgId() {
    return this.imgId;
  }
  
  setImgId(imgId: string) {
    this.imgId = imgId;
    
    sessionStorage.setItem(
      'imageId',
      this.imgId
    );
    sessionStorage.setItem(
      'title',
      this.imgId
    );
    // this.imgId = imgId;
    // sessionStorage.setItem('imageId', this.imgId);
    // sessionStorage.setItem('title', this.imgId);
  }

}
