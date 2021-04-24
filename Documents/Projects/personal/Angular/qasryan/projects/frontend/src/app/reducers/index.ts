import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAdminLayoutReducer from '../layouts/admin-layout/store/admin-layout.reducer';
import * as fromAppReducer from './app.reducer';
import * as fromKidnappedReducer from '../layouts/default-layout/pages/reducers/kidnapped.reducer';


export const storeFeatureKey = 'store';

export interface AppState {
  adminLayout : fromAdminLayoutReducer.State,
  generals : fromAppReducer.State,
  kidnapped: fromKidnappedReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
  adminLayout : fromAdminLayoutReducer.reducer,
  generals : fromAppReducer.reducer,
  kidnapped : fromKidnappedReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
