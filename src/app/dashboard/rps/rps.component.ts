import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss']
})
export class RPSComponent implements OnInit {

  constructor() { }
    win = false;
    tie = false;
    lose = false;
    num = null;
    enemy = null;
  ngOnInit(): void {
  }
  Game(num) {
      this.win = false;
      this.lose = false;
      this.tie = false;
      this.enemy = Math.floor(Math.random() * 3);
      this.num = num;
      if (this.enemy === 0){
          if (this.num === 0){
              this.tie = true;
          }
          else if ( this.num === 1){
              this.win = true;
          }
          else {
              this.lose = true;
          }
      } else if (this.enemy === 1){
          if (this.num === 1){
              this.tie = true;
          }
          else if ( this.num === 2){
              this.win = true;
          }
          else {
              this.lose = true;
          }
      }
      else {
          if (this.num === 2){
              this.tie = true;
          }
          else if ( this.num === 0){
              this.win = true;
          }
          else {
              this.lose = true;
          }
      }
}
}
