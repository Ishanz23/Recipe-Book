import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserAuthService {
  token: string;

  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response: Response) => console.log(response)
    ).catch(
      (error: Error) => console.error(error)
    );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (response: Response) => {
        console.log(response);
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        );
        this.router.navigate(['/']);
      }
    ).catch(
      (error: Error) => console.error()
    );
  }

  isAuthenticated() {
    return (this.token) ? true : false;
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = this.token
    );
    return this.token;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
