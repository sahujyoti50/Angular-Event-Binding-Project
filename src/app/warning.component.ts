import { Component } from '@angular/core';
@Component({
  selector: 'app-failure',
  template: `<h3>Failure Msg Displayed!!</h3>`,
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class FailureComponent {}
