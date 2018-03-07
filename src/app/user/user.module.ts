import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [ProfileComponent]
})
export class UserModule { }
