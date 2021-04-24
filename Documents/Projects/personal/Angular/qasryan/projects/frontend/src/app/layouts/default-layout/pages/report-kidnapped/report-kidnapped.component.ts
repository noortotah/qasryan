import {  Router } from '@angular/router';
import { AddNewKidnapped } from './../reducers/kidnapped.actions';
import { Country } from './../../../../models/country';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/frontend/src/app/reducers';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-report-kidnapped',
  templateUrl: './report-kidnapped.component.html',
  styleUrls: ['./report-kidnapped.component.scss']
})
export class ReportKidnappedComponent implements OnInit, AfterViewInit {
  date;
  countries: Country[];
  ageRanges: {id: string, text: string}[];
  imagePreview: string | ArrayBuffer;
  // Initiate Form
  reportKidnappingForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    age_range: ['', [Validators.required]],
    story: ['', [Validators.required]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    personal_image: ['', [Validators.required]],
    kidnap_date: ['', [Validators.required]],
    status: ['', [Validators.required]],
    activity_type: ['', [Validators.required]]
  });




  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private router: Router) { }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  ngOnInit(): void {
    this.store.select('generals').subscribe(
      generalState => {
        this.countries = generalState.countries;
        this.ageRanges = generalState.ageRanges;
      }
    );
  }

  sendForm(): void {
    console.log(this.reportKidnappingForm.value);
    this.store.dispatch(
      new AddNewKidnapped(this.reportKidnappingForm.value)
    );

    this.router.navigate(['/']);
  }

  onChoosefile(event: Event): void {
    console.log('onChooseFile');
    console.log(this.reportKidnappingForm);
    const file = (event.target as HTMLInputElement).files[0];
    this.reportKidnappingForm.patchValue({image: file});
    this.reportKidnappingForm.get('personal_image').updateValueAndValidity();
    console.log('onChooseFile');
    console.log(this.reportKidnappingForm);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
