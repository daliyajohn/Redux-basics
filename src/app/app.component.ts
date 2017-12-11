import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SimpleState2 } from './model/simple2.model';
import * as Simple2Action from './action/simple2.action';

export type Action = Simple2Action.All;

export interface AppState {
  sample1: string;
  Post: SimpleState2;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text: any;
  Output$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.Output$ = this.store.select('sample1');
  }
  save() {
    this.store.dispatch({type: 'SAVE'});
  }
  updated() {
    this.store.dispatch({type: 'UPDATE'});
  }
  add() {
    this.store.dispatch(new Simple2Action.AddText(this.text));
  }
  edit() {
    this.store.dispatch(new Simple2Action.EditText());
  }
  reset() {
    this.store.dispatch(new Simple2Action.ResetText());
  }
}

