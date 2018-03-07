import { Injectable } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {User} from './user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private authService: AuthService, private afs: AngularFirestore) { }

  getUser(): Observable<User> {
    return this.authService.getAuthUser()
      .switchMap(authUser => {
        return this.afs.doc<User>('users/' + authUser.uid).valueChanges()
          .map(dbUser => {
            console.log(authUser);
            if (!dbUser) { return authUser; }
            authUser.username = dbUser.username;
            authUser.firstName = dbUser.firstName;
            authUser.middleName = dbUser.middleName;
            authUser.lastName = dbUser.lastName;
            return authUser;
          });
      });
  }

  update(user: User): Promise<any> {
    return this.afs.doc<User>('users/' + user.uid).set(user, {merge: true});
  }

}
