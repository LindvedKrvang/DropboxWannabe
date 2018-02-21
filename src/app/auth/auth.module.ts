import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [LoginComponent],
})
export class AuthModule { }
