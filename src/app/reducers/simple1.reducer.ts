import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';

export function simpleReducer1 (state: string= 'hello', action: Action ) {
    switch (action.type) {
        case 'SAVE':
        console.log(action.type);
            return state = 'saved';
        case 'UPDATE':
        console.log(action.type);
            return state = 'updated';
        default:
            return state = 'default';
    }
}
