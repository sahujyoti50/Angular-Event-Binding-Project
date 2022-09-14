import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p *ngFor="let evens of evenArray" style.color="red">{{evens}}</p>`,
  styles: [`
  p {
    color: green;
  }`]
})
export class EvenComponent {
  @Input() evenArray: number[] = [];
}
