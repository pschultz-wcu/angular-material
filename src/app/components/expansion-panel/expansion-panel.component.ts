import { Component, OnInit } from '@angular/core';

type PanelState = 'base' | 'no-program' | 'no-campus';
let stateString: string = 'base';
let panelState: PanelState = stateString as PanelState;

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  panelState = panelState;
  panelStateIsBase: PanelState = 'base';
  panelStateIsNoProgram: PanelState = 'no-program';
  panelStateIsNoCampus: PanelState = 'no-campus';

  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  panel4OpenState = false;
  panel5OpenState = false;

  constructor() {}

  ngOnInit(): void {}
}
