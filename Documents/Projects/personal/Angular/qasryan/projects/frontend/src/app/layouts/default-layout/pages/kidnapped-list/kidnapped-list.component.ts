import { Country } from './../../../../models/country';
import { KidnappedPerson } from './../../../../models/kidnapped-person';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/frontend/src/app/reducers';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-kidnapped-list',
  templateUrl: './kidnapped-list.component.html',
  styleUrls: ['./kidnapped-list.component.scss']
})
export class KidnappedListComponent implements OnInit, AfterViewInit {
  kidnappedList : KidnappedPerson[];
  countries: Country[];

  ngAfterViewInit(): void {
    Feather.replace();
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
      this.store.select('kidnapped').subscribe( kidnappedState => {
          this.kidnappedList = kidnappedState.kidnappedList;
      });
      this.store.select('generals').subscribe( generalState => {
        this.countries = generalState.countries;
    });
  }

  displayPersonCountry(countryId): string {
    return this.countries.find(country => country.id === countryId).nameAr;
  }

}
