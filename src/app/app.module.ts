import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { PlaygroundComponent } from './playground/playground.component';
import { HttpClientModule } from '@angular/common/http';
import { RFormComponent } from './r-form/r-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    PlaygroundComponent,
    RFormComponent,
    ExampleComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
