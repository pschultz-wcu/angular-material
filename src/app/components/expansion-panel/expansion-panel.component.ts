import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  panel4OpenState = false;
  panel5OpenState = false;

  constructor() {}

  ngOnInit(): void {}
}
