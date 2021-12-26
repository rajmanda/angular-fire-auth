import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `,
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
