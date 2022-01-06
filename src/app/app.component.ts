import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'angular-fire-auth';
  
  constructor(public auth: AngularFireAuth) {
  }
  login() {
    var x = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this) ;
    //console.log(x) ;
  }
  logout() {
    this.auth.signOut();
  }

}
