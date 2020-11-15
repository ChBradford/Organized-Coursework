import { Component, OnInit, Input } from '@angular/core';
import { SigninserviceService } from '../signinservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  error = "";

  info: object;

  id: string;
  idObj: object;

  constructor(private signinservice: SigninserviceService, private router: Router) { }

  ngOnInit() {
  }

  authenticate(){
    this.signinservice.authenticateUser(this.username, this.password).subscribe(
      data=> {
        this.info = data;
        //console.log(this.info);
        if(data.toString() == "null"){
          this.router.navigate(['sign-in']);
          this.username = "";
          this.password = "";
          this.error = "Username or Password incorrect.";
        }
        else {          
          this.router.navigate(['/user-home']);
          sessionStorage.setItem('email', data['email']);
          sessionStorage.setItem('username', data['username']);
          sessionStorage.setItem('newLogin', "true");
          this.error = "";
        }
      }
    );
  }

}
