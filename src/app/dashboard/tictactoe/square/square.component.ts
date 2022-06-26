import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; border: none; background-color: #6379ff; color: white; border-radius: 20px; transition: all .3s ease-in-out;} button:hover{ background: whitesmoke; color: black; }']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}
