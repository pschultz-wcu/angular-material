import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialComponentsModule } from '../material.module';

import { VFormBtnGroupComponent } from './buttons/v-form-btn-group/v-form-btn-group.component';
import { HFormBtnGroupComponent } from './buttons/h-form-btn-group/h-form-btn-group.component';
import { ContinueBtnComponent } from   './buttons/continue-btn/continue-btn.component';
import { TextFieldComponent } from './form-controls/text-field/text-field.component';
import { SelectFieldComponent } from './form-controls/select-field/select-field.component';
import { NavbarComponent } from './navbar/navbar.component';
 
@NgModule({
  declarations: [
    AppComponent,
    VFormBtnGroupComponent,
    HFormBtnGroupComponent,
    ContinueBtnComponent,
    TextFieldComponent,
    SelectFieldComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
