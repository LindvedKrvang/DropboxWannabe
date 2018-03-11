import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProfileComponent],
  providers: [UserService]
})
export class UserModule { }
