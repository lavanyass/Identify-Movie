import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.scss'],
})
export class ScoreDisplayComponent implements OnInit {
  @Input() teamA = 0;
  @Input() teamB = 0;
  constructor() {}
  ngOnInit(): void {}
}
