import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule { }
