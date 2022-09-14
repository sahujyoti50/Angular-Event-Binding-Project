import { Component } from '@angular/core';
@Component({
  selector: 'app-success',
  template: `<h3>Success Msg Displayed!!</h3>`,
  styles: [
    `
      h3 {
        color: green;
      }
    `,
  ],
})
export class SuccessComponent {}
