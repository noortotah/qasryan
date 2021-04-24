import { AdminLayoutActionTypes } from './admin-layout.actions';
import { Action } from '@ngrx/store';


export const adminLayoutFeatureKey = 'adminLayout';

export interface State {
  isCollapsed: boolean;
}

export const initialState: State = {
  isCollapsed : false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AdminLayoutActionTypes.ToggleNavbarCollapsed:
      return {
        ...state,
        isCollapsed: !state.isCollapsed
      };
    default:
      return state;
  }
}
