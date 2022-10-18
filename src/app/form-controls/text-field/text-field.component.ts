import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, NgForm, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  textFormControl = new FormControl('', [Validators.required]);
  matcher = new ErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
