import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { TictactoeComponent } from './tictactoe.component';

const route: Routes = [
    {
        path: '',
        component: TictactoeComponent
    }
];

@NgModule({
  declarations: [TictactoeComponent, SquareComponent, BoardComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(route),
  ]
})
export class TictactoeModule { }
