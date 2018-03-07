import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router, RouterPreloader} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SignUpService {

  constructor(private auth: AuthService) { }

  signUp(user: User): Promise<User> {
    return this.auth.createUser(user);
  }
}
