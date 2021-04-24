import { Action } from '@ngrx/store';

export enum AdminLayoutActionTypes {
  ToggleNavbarCollapsed = '[AdminLayout] Toggle Navbar Collapsed',
  LoadAdminLayouts = '[AdminLayout] Load AdminLayouts'
}

export class LoadAdminLayouts implements Action {
  readonly type = AdminLayoutActionTypes.LoadAdminLayouts;
}

export class ToggleNavbarCollapsed implements Action {
  readonly type = AdminLayoutActionTypes.ToggleNavbarCollapsed;

}


export type AdminLayoutActions = LoadAdminLayouts | ToggleNavbarCollapsed;
