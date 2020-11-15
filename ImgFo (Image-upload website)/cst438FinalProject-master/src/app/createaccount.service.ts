import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateaccountService {

  constructor(private http: HttpClient) { }
  createAccount(username: string, password: string, email: string){
    
    return this.http.post('https://pixiv-clone-backend.herokuapp.com/user/addUser?email=' + email + '&password=' + password + '&username=' + username, true);

  }
}
