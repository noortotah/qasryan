import { KidnappedActions, KidnappedActionTypes } from './kidnapped.actions';
import { KidnappedPerson } from './../../../../models/kidnapped-person';
import { Action } from '@ngrx/store';


export const kidnappedFeatureKey = 'kidnapped';

export interface State {
  kidnappedList : KidnappedPerson[]
}

export const initialState: State = {
  kidnappedList : [
    {
      id: '1',
      name: 'محمد محمود حمدان',
      age_range : '30 - 45',
      story : 'fjideorijsfoiejwoi3joj',
      country: '1',
      gender: 'Male',
      personal_image: 'x.jpg',
      kidnap_date: '20-1-2020',
      status: 'kidnapped',
      activity_type: 'قانوني'
    },
    {
      id: '2',
      name: 'سعيدة سعدون سعدان',
      age_range : '18 - 30',
      story : 'fjideorijsfoiejwoi3joj',
      country: '2',
      gender: 'Female',
      personal_image: 'x.jpg',
      kidnap_date: '20-1-2020',
      status: 'safe',
      activity_type: 'اجتماعي'
    },
    {
      id: '3',
      name: 'سيسو سرور',
      age_range : '>18',
      story : 'fjideorijsfoiejwoi3joj',
      country: '3',
      gender: 'Other',
      personal_image: 'x.jpg',
      kidnap_date: '20-1-2020',
      status: 'kidnapped',
      activity_type: 'سياسي'
    },
    {
      id: '4',
      name: 'نهى المتنهنهة',
      age_range : '>18',
      story : 'fjideorijsfoiejwoi3joj',
      country: '3',
      gender: 'Female',
      personal_image: 'x.jpg',
      kidnap_date: '30-12-2020',
      status: 'safe',
      activity_type: 'حقوقي'
    }
  ]
};

export function reducer(state = initialState, action: KidnappedActions): State {
  switch (action.type) {
    case KidnappedActionTypes.AddNewKidnapped:
      return {
        ...state,
        kidnappedList: [...state.kidnappedList, action.newKidnapped]
      };
    default:
      return state;
  }
}
