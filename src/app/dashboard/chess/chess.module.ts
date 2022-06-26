import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChessComponent } from './chess.component';
import {  NgxChessBoardModule } from 'ngx-chess-board';


const route: Routes = [
    {
        path: '',
        component: ChessComponent
    }
];
@NgModule({
  declarations: [ChessComponent],
  imports: [
    CommonModule,
      FormsModule,
      NgxChessBoardModule,
      RouterModule.forChild(route),

  ]
})
export class ChessModule { }
