import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer1 } from './reducers/simple1.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ msg: simpleReducer1 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
