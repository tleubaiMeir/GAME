import { Component, OnInit, HostListener } from '@angular/core';
import { Snake } from './snake';
import { Direction } from './direction';
import { apple } from './apple';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {

    readonly size = 20;
    readonly gridSize = this.size * this.size;
    readonly cellWidth = 10; // in px
    readonly cells = new Array(this.size * this.size);
    readonly timestep = 100;
    readonly ngStyleCells = {
        width: `${this.size * this.cellWidth}px`
    };
    readonly snake: Snake = new Snake();
    readonly direnum = Direction;
    dead = false;

    time = 0;

    apple: apple = new apple(this.gridSize);

    paused = false;

    ngOnInit() {
        this.doSpawnEgg();
        const runTime = () => {
            setTimeout(() => {
                this.goStep();
                this.dead = this.snake.checkDead();
                this.time++;
                if (!this.dead) {
                    runTime();
                }
            }, this.timestep);
        };
        runTime();
    }

    doTogglePause() {
        this.paused = !this.paused;
    }

    doSpawnEgg() {
        this.apple = new apple(this.gridSize, this.snake);
    }

    goStep() {
        this.snake.goStep(this.size);
        this.eatEgg();
    }

    eatEgg() {
        const pos = this.snake.head.pos;
        if (this.isEgg(pos)) {
            this.doSpawnEgg();
            this.snake.grow();
        }
    }

    @HostListener('window:keydown', ['$event'])
    onKeypress(e: KeyboardEvent) {
        if (!this.dead) {
            const dir = KeyCodes[e.keyCode];
            this.changeDirAndGoStep(dir);
        }
    }

    changeDirAndGoStep(dir) {
        if (dir) {
            const canChangeDir = this.getCanChangeDir(dir, this.snake.dir);
            if (canChangeDir) {
                this.snake.dir = dir;
                this.goStep();
            }
        }
    }

    getCanChangeDir(d1: Direction, d2: Direction) {
        const dirs = [d1, d2];
        const filteredUpDown = dirs.filter(dir => dir === Direction.UP || dir === Direction.DOWN).length;
        const onlyOneDir = filteredUpDown === 2 || filteredUpDown === 0;
        return !onlyOneDir;
    }

    isEgg(cell) {
        return this.apple.pos === cell;
    }

    ngStyleCell(idx: number) {
        const bgapple = this.isEgg(idx) ? 'orange' : null;
        const bgSnake = this.snake.isSnakeCell(idx) ? 'red' : null;
        const defaultBg = '#ccc';
        return {
            width: `${this.cellWidth}px`,
            height: `${this.cellWidth}px`,
            background: bgapple || bgSnake || defaultBg
        };
    }

}

const KeyCodes = {
    37: Direction.LEFT,
    38: Direction.UP,
    39: Direction.RIGHT,
    40: Direction.DOWN
};
