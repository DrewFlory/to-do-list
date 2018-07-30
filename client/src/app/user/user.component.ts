import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  signUpUser:any = {};
  theActualUser:any = {};
  loginUser:any = {};
  theError:any;


  constructor(private authService: EntriesService) { }

    tryToSignUp(){
      this.authService.signup(this.signUpUser)
      .subscribe(res =>{ this.successCallback(res)},
        (error) => {this.errorCallback(error)})
    }

    tryToLogIn(){
      console.log(this.loginUser);
      this.authService.login(this.loginUser)
      .subscribe(res =>{console.log(this.theActualUser = res)},
      (error)=> {this.theError = error})
    }

    logMeOut(){
      this.authService.logout()
      .subscribe(res => { this.theActualUser = {} })
    }

    successCallback(userObject){
      this.theActualUser = userObject;
      this.theError = null;
    }

    errorCallback(errorObject){
      this.theError = errorObject;
      this.theActualUser = {};
    }

    checkIfLoggedIn(){
      this.authService.isLoggedIn()
      .subscribe(
        res => {this.successCallback(res) },
        err => {this.errorCallback(null) }
      )
    }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

}

