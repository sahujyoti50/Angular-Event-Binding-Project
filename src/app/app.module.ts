import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success.component';
import { FailureComponent } from './warning.component';
import { OddComponent } from './odd.component';
import { EvenComponent } from './even.component';
@NgModule({
  declarations: [OddComponent,EvenComponent,AppComponent, SuccessComponent,FailureComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
