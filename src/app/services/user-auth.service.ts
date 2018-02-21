import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserAuthService {

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response: Response) => console.log(response)
    ).catch(
      (error: Error) => console.error(error)
    );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (response: Response) => console.log(response)
    ).catch(
      (error: Error) => console.error()
    );
  }

}
