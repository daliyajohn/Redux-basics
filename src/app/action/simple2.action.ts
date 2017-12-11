import { Action } from '@ngrx/store';

export const ADD = '[post] Add';
export const EDIT = '[post] Edit';
export const RESET = '[post] Reset';

export class AddText implements Action {
    readonly type = ADD;
    constructor(public payload: string) {}
}
export class EditText implements Action {
    readonly type = EDIT;
}
export class ResetText implements Action {
    readonly type = RESET;
}

export type All = AddText | EditText | ResetText;
