import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureTileComponent } from './picture-tile/picture-tile.component';
import { MovieNameRevealComponent } from './movie-name-reveal/movie-name-reveal.component';
import { IdentifyMovieGameComponent } from './identify-movie-game/identify-movie-game.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { ScoreCalculationComponent } from './score-calculation/score-calculation.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PictureTileComponent,
    MovieNameRevealComponent,
    IdentifyMovieGameComponent,
    GameRulesComponent,
    GameResultsComponent,
    GameScreenComponent,
    ScoreDisplayComponent,
    ScoreCalculationComponent,
    InputFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
