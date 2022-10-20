import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialComponentsModule } from '../material.module';

import { VFormBtnGroupComponent } from './components/buttons/v-form-btn-group/v-form-btn-group.component';
import { HFormBtnGroupComponent } from './components/buttons/h-form-btn-group/h-form-btn-group.component';
import { ContinueBtnComponent } from   './components/buttons/continue-btn/continue-btn.component';
import { TextFieldComponent } from './components/form-controls/text-field/text-field.component';
import { SelectFieldComponent } from './components/form-controls/select-field/select-field.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HomePageCardComponent } from './components/cards/home-page-card/home-page-card.component';
import { FormCardComponent } from './components/cards/form-card/form-card.component';
import { FileCardComponent } from './components/cards/file-card/file-card.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
 
@NgModule({
  declarations: [
    AppComponent,
    VFormBtnGroupComponent,
    HFormBtnGroupComponent,
    ContinueBtnComponent,
    TextFieldComponent,
    SelectFieldComponent,
    NavbarComponent,
    ProgressBarComponent,
    HomePageCardComponent,
    FormCardComponent,
    FileCardComponent,
    ExpansionPanelComponent,
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
