import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameState } from '../Models/game-state';
import { MovieDetail, MovieList } from '../Models/movie-detail.model';

@Component({
  selector: 'app-identify-movie-game',
  templateUrl: './identify-movie-game.component.html',
  styleUrls: ['./identify-movie-game.component.scss'],
})
export class IdentifyMovieGameComponent implements OnInit {
  movieList = MovieList;
  movieId = 0;
  movieStepNumber = 0;
  currentMovie: MovieDetail;
  @Output() endGame = new EventEmitter();
  teamAScore = 0;
  teamBScore = 0;
  constructor() {}

  ngOnInit(): void {
    this.currentMovie = this.movieList[this.movieId];
  }

  nextStep() {
    this.movieStepNumber++;

    if (this.movieStepNumber > 6) {
      this.moveToNextMovie();
    }
  }
  moveToNextMovie() {
    this.movieId++;

    if (this.movieId >= this.movieList.length) {
      this.endGame.emit();
    } else {
      this.movieStepNumber = 0;
      this.currentMovie = this.movieList[this.movieId];
    }
  }

  skip() {
    this.moveToNextMovie();
  }
  teamAScoreUpdated(score) {
    this.teamAScore = score;
    this.moveToNextMovie();
  }
  teamBScoreUpdated(score) {
    this.teamBScore = score;
    this.moveToNextMovie();
  }
}
