import { Component, OnInit, Input } from '@angular/core';
import { CreateaccountService } from '../createaccount.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  @Input() email: string;
  error = "";

  info: object;

  constructor(private createaccountservice: CreateaccountService, private router: Router) { 
    
  }

  ngOnInit() {
  }

  createAcc(){
    this.createaccountservice.createAccount(this.username, this.password, this.email).subscribe(
      data=> {
        this.info = data;
        console.log(this.info);
        if(data.toString() == "false"){
            this.router.navigate(['create-account']);
            this.username = "";
            this.password = "";
            this.email = "";
            this.error = "Account already exists or Username is taken.";
        }
        else {
          this.router.navigate(['/user-home']);
          sessionStorage.setItem('email', this.email);
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('newLogin', "true");

          this.error = "";
        }        
      }
    );
  }
}
