import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button class="button-33" role="button" (click)="onStartEvent()">start</button>
    <button  class="button-33" role="button" (click)="onStopEvent()">stop</button>
    <app-odd [oddArray]="odd"></app-odd>
    <app-even [evenArray]="even"></app-even>
   `,
})
export class AppComponent {
  count = 0;
  even:number[]=[];
  odd:number[]=[];
  start: any;
  array: number[] = [];
  onStartEvent() {
    this.start = setInterval(() => {
      this.count = this.count + 1;
      if (this.count % 2 == 0) {
        this.even.push(this.count);
      }else{
        this.odd.push(this.count);
      }
    }, 1000);
  }
  onStopEvent() {
    clearInterval(this.start);
  }
}
