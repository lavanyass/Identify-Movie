import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score-calculation',
  templateUrl: './score-calculation.component.html',
  styleUrls: ['./score-calculation.component.scss'],
})
export class ScoreCalculationComponent implements OnInit {
  @Input() teamA = 0;
  @Input() teamB = 0;
  @Output() teamAscoreUpdate = new EventEmitter<number>();
  @Output() teamBscoreUpdate = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  correctA() {
    console.log('correctAclick');
    this.teamA = this.teamA + 10;
    this.teamAscoreUpdate.emit(this.teamA);
  }
  wrongA() {
    this.teamA = this.teamA - 5;
    this.teamAscoreUpdate.emit(this.teamA);
  }
  correctB() {
    this.teamB = this.teamB + 10;
    this.teamBscoreUpdate.emit(this.teamB);
  }
  wrongB() {
    this.teamB = this.teamB - 5;
    this.teamBscoreUpdate.emit(this.teamB);
  }
}
