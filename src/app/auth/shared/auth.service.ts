import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../../user/shared/user';

@Injectable()
export class AuthService {

  testUser = {email: 'test@email.com', password: 'testpassword'};

  constructor(private fireAuth: AngularFireAuth) { }

  createUser(user: User): Promise<User> {
    return this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email , user.password);
  }

  login(email: string, password: string): Promise<User> {
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

  getAuthUser(): Observable<User> {
    return this.fireAuth.authState
      .map(authState => {
        return {uid: authState.uid, email: authState.email};
      });
  }
}
