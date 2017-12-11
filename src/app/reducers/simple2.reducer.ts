import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { SimpleState2 } from '../model/simple2.model';
import * as Simple2Action from '../action/simple2.action';

export type Action = Simple2Action.All;

const  defaultState: SimpleState2 = {
    text: 'Default post',
    value: 0
};
export function Simple2Reducer () {
}
