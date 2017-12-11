import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SampleState2 } from './model/simple2.model';

interface AppState {
  sample1: string;
  sample2: SampleState2;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
}
