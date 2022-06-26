import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from './item';
import { TwoThousandService } from './two-thousand.service';

const colorMap: {[k: number]: string} = {
    2: '#7a8dfc',
    4: '#3f56e7',
    8: '#4252af',
    16: '#2038b6',
    32: '#6776d2',
    64: '#7f90ff',
    128: '#5267E1',
    256: '#324be7',
    512: '#2a45e1',
    1024: '#2e4bff',
    2048: '#203cd3',
};

@Component({
  selector: 'app-two-thousand',
  templateUrl: './two-thousand.component.html',
  styleUrls: ['./two-thousand.component.scss']
})
export class TwoThousandComponent implements OnInit {
    keyEventCodeMap: {[type: string]: string} = {
        ArrowRight: 'right',
        ArrowLeft: 'left',
        ArrowUp: 'up',
        ArrowDown: 'down',
    };

    constructor(public gameService: TwoThousandService) { }

    ngOnInit(): void {
    }
    getStyles(item: Item): {[p: string]: string} {
        const top = (item.row * 110 - 100) + 'px';
        const left = (item.col * 110 - 100) + 'px';
        return {
            top,
            left,
            'background-color': colorMap[item.value] || 'black',
            'font-size': item.value >= 10000 ? '30px' : '50px'
        };
    }

    @HostListener('window:keyup', ['$event'])
    onKeyup(event: KeyboardEvent) {
        if (this.keyEventCodeMap[event.code]) {
            this.gameService[this.keyEventCodeMap[event.code]]();
        }
    }

}
