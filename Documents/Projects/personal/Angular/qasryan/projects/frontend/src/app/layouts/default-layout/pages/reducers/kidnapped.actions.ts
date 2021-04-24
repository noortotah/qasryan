import { KidnappedPerson } from './../../../../models/kidnapped-person';
import { Action } from '@ngrx/store';

export enum KidnappedActionTypes {
  LoadKidnappeds = '[Kidnapped] Load Kidnappeds',
  AddNewKidnapped = '[Kidnapped] Add Kidnapped',
  GetKidnapped = '[Kidnapped] Get Kidnapped',

}

export class LoadKidnappeds implements Action {
  readonly type = KidnappedActionTypes.LoadKidnappeds;
}

export class AddNewKidnapped implements Action {
  readonly type = KidnappedActionTypes.AddNewKidnapped;

  constructor(public newKidnapped: KidnappedPerson){}
}

export class GetKidnapped implements Action {
  readonly type = KidnappedActionTypes.GetKidnapped;

  constructor(public kidnappedId: string){}
}


export type KidnappedActions =    LoadKidnappeds
                                | AddNewKidnapped
                                | GetKidnapped;
