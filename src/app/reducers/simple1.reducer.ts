import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';

export function simpleReducer1 (state: string= 'hello', action: Action ) {
    console.log(action.type, state);
    switch (action.type) {
        case 'SAVE':
            return state = 'saved';
        case 'UPDATE':
            return state = 'updated';
        default:
            return state = 'default';
    }
}
