import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginService} from './shared/loginService';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    AngularFireAuthModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class AuthModule { }
