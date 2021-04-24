import { Country } from './../../../../models/country';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/frontend/src/app/reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  countries: Country[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('generals').subscribe(generalState => {
      this.countries = generalState.countries;
    });
  }

}
