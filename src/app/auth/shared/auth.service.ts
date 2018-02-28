import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  createUser() {
    this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword('test@email.com' , 'testpassword')
      .then(user => {
        console.log('User', user);
      });
  }

  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .map(authState => {
        return authState !== null;
      });
  }

}
