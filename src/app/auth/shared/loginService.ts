import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LoginService {

  constructor(private fireAuth: AngularFireAuth) {}

  createUser() {
    this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword('test@email.com' , 'testpassword')
      .then(user => {
        console.log('User', user);
      });
  }

  login(email: string, password: string) {
    this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => {
        console.log('user logged in', user);
      });
  }
}
