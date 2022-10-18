import { Component, OnInit } from '@angular/core';

interface Program {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  programs: Program[] = [
    {value: 'msn-family-nurse-practitioner', viewValue: 'MSN - Family Nurse Practitioner'},
    {value: 'msn-nurse-educator', viewValue: 'MSN - Nurse Educator'},
    {value: 'rn-to-msn-nurse-educator', viewValue: 'RN to MSN - Nurse Educator'},
    {value: 'post-masters\'s-nurse-educator-certificate', viewValue: 'Post-Masters\'s Nurse Educator Certificate'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
