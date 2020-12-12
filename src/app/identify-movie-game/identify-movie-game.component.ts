import { Component, OnInit } from '@angular/core';
import { GameState } from '../Models/game-state';
import { MovieDetail, MovieList } from '../Models/movie-detail.model';

@Component({
  selector: 'app-identify-movie-game',
  templateUrl: './identify-movie-game.component.html',
  styleUrls: ['./identify-movie-game.component.scss'],
})
export class IdentifyMovieGameComponent implements OnInit {
  gameStateEnum = GameState;
  movieList = MovieList;
  movieId = 0;
  movieStepNumber = -1;
  currentMovie: MovieDetail;
  gameState: GameState = GameState.Initialized;

  constructor() {}

  ngOnInit(): void {
    this.loadCurrentMovie();
  }

  loadCurrentMovie() {
    this.currentMovie = this.movieList[this.movieId];
  }

  nextStep() {
    this.movieStepNumber++;

    if (this.movieStepNumber > 5) {
      this.moveToNextMovie();
    }
  }
  moveToNextMovie() {
    this.movieId++;

    if (this.movieId >= this.movieList.length) {
      this.gameState = GameState.Completed;
    } else {
      this.movieStepNumber = 0;
      this.loadCurrentMovie();
    }
  }

  skip() {
    this.moveToNextMovie();
  }

  startGame() {
    this.gameState = this.gameStateEnum.Started;
    this.movieId = 0;
    this.movieStepNumber = 0;
    this.loadCurrentMovie();
  }
}
