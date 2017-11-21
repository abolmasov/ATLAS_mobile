import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

// import {
//   HttpHeaders
// } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  // account: { email: string, password: string } = {
  //   email: 'mbrodetskaya@archer-soft.com',
  //   password: 'kop4R4fd1UTtI'
  // };

  account: { email: string, password: string } = {
    email: 'rabolmasov1@archer-soft.com',
    password: 'Abolmasov89'
  };

  // account: { email: string, password: string } = {
  //   email: 'mbrodetskaya+3@archer-soft.com',
  //   password: 'kop4R4fd1UTtI'
  // };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {

    // const headers = new HttpHeaders({
    //   "Access-Control-Allow-Origin:https": "//*.earn.org",
    //   'Content-Type': 'application/json'
    // });

    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  sendRequest() {
    this.user.sendRequest().subscribe((resp) => {
      debugger;
    });
  }
}
