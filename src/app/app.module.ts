import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SimpleReducer1 } from './reducers/simple1.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Simple2Reducer } from './reducers/simple2.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      sample1: SimpleReducer1,
      Post: Simple2Reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
