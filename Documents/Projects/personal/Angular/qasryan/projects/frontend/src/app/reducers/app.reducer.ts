import { Country } from './../models/country';
import { Action } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface State {
  countries: Country[];
  ageRanges: { id: string, text: string}[];
}

export const initialState: State = {
  countries: [
    {id: '1', nameAr: 'الأردن', nameEng: 'Jordan', code: '' },
    {id: '2', nameAr: 'مصر', nameEng: 'Egypt', code: ''},
    {id: '3', nameAr: 'اسرائيل', nameEng: 'Israel', code: ''}
  ],
  ageRanges: [
    { id: '1', text: ' < 18'},
    { id: '2', text: '18 - 30'},
    { id: '3', text: '30 - 40'},
    { id: '4', text: '40 - 50'},
    { id: '5', text: ' > 50'},
  ]

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
