import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p *ngFor="let odds of oddArray">{{odds}}<p>`,
  styles: [`
  p {
    color: crimson;
  }`]
  
})
export class OddComponent {
    @Input() oddArray:number[]=[];
  
}
