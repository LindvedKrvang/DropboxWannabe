import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AngularFirestore} from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignUpComponent],
  providers: [AuthService, AngularFirestore]
})
export class AuthModule { }
