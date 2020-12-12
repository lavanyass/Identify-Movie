import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss'],
})
export class GameRulesComponent implements OnInit {
  @Output() startGame = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  startGameClick() {
    this.startGame.emit();
  }
}
