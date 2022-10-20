import { Component, OnInit } from '@angular/core';

type CardState = 'valid' | 'invalid';
let stateString: string = 'valid';
let cardState: CardState = stateString as CardState;

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {

  cardState = cardState;
  cardStateIsValid: CardState = 'valid';
  cardStateIsInvalid: CardState = 'invalid';

  constructor() { }

  ngOnInit(): void {
  }

}
