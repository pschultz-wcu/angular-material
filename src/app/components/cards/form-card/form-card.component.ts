import { Component, OnInit } from '@angular/core';

type CardState = 'active' | 'inactive';
let stateString: string = 'active';
let cardState: CardState = stateString as CardState;

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  cardState = cardState;
  cardStateIsActive: CardState = 'active';
  cardStateIsInactive: CardState = 'inactive';

  constructor() { }

  ngOnInit(): void {
  }

}
