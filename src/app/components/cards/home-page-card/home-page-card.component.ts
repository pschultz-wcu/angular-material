import { Component, OnInit } from '@angular/core';

type CardState = 'active' | 'inactive' | 'complete' | 'collapsed';
let stateString: string = 'active';
let cardState: CardState = stateString as CardState;

@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrls: ['./home-page-card.component.scss'],
})
export class HomePageCardComponent implements OnInit {
  cardState = cardState;
  cardStateIsActive: CardState = 'active';
  cardStateIsInactive: CardState = 'inactive';
  cardStateIsComplete: CardState = 'complete';
  cardStateIsCollapsed: CardState = 'collapsed';

  constructor() {}

  ngOnInit(): void {}
}
