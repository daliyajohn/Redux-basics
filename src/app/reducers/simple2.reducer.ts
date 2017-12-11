import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { SimpleState2 } from '../model/simple2.model';
import * as Simple2Action from '../action/simple2.action';

export type Action = Simple2Action.All;

const  defaultState: SimpleState2 = {
    text: 'Default post',
    value: 0
};

const newState = (state, newData ) => {
    return  Object.assign({}, state, newData);
};

export function Simple2Reducer (state: SimpleState2 = defaultState, action: Action ) {
    switch (action.type) {
        case Simple2Action.EDIT:
            console.log(action.type);
            return newState(state, {text: 1 });
        case Simple2Action.ADD:
            console.log(action.type);
            return newState(state, {value: state.value + 1 });
        case Simple2Action.RESET:
            console.log(action.type);
            return defaultState;
        default:
            return state;
    }
}
