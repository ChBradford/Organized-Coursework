import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninserviceService {

  constructor(private http: HttpClient) { }
  authenticateUser(username: string, password: string){
    return this.http.get('https://pixiv-clone-backend.herokuapp.com/user/userAuthentication/{username}{password}?password=' + password + "&username=" + username);
  }

}
