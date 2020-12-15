import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { GameState } from '../Models/game-state';
import { MovieDetail, MovieList } from '../Models/movie-detail.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
  gameStateEnum = GameState;
  gameState: GameState = GameState.Initialized;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.gameState = this.gameStateEnum.Started;
  }
  endGame() {
    this.gameState = this.gameStateEnum.Completed;
  }
}
