import { Country } from './../../../../models/country';
import { NgForm } from '@angular/forms';
import { KidnappedPerson } from './../../../../models/kidnapped-person';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/frontend/src/app/reducers';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  countries: Country[];
  kidnappedPeople: {all: KidnappedPerson[], safe: KidnappedPerson[] } = { all : [], safe: []};
  kidnappedPeopleForSelectedCountry: {all: KidnappedPerson[], safe: KidnappedPerson[] } = { all : [], safe: []};

  pieChart: any;
  geoChart: any;
  cloumnChart: any;

  constructor(private store: Store<AppState>) { }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  ngOnInit(): void {

    this.store.select('generals').subscribe(
      generalsState => {
        this.countries = generalsState.countries;
      }
    );

    this.store.select('kidnapped').subscribe(
      kidnappedState => {
        this.kidnappedPeople.all = kidnappedState.kidnappedList;
        this.kidnappedPeople.safe =
        kidnappedState.kidnappedList.filter(kidnappedPerson => kidnappedPerson.status == 'safe');

        this.kidnappedPeopleForSelectedCountry.all = this.kidnappedPeople.all;
        this.kidnappedPeopleForSelectedCountry.safe = this.kidnappedPeople.safe;

      }
    );

    this.generateCharts();

  }

  selectCountry(countryId): void {
    if (countryId) {
      this.kidnappedPeopleForSelectedCountry.all
        =  this.kidnappedPeople.all.filter( kinappedPerson => kinappedPerson.country == countryId);
      this.kidnappedPeopleForSelectedCountry.safe
        =  this.kidnappedPeople.safe.filter( kinappedPerson => kinappedPerson.country == countryId);

    }else {
      this.kidnappedPeopleForSelectedCountry.all
      =  this.kidnappedPeople.all;
      this.kidnappedPeopleForSelectedCountry.safe
      =  this.kidnappedPeople.safe;
    }


    this.generateCharts();
  }

  private generateCharts(): void {

    // group kidnapped People
    const groupBy = (objArr, key) => {
      return objArr.reduce( (result, element) => {
        (result[element[key]] = result[element[key]] || [] ).push(element);
        return result;
      }, {});
    };

    let groupedData =  groupBy(this.kidnappedPeopleForSelectedCountry.all, 'country');
    // console.log(groupedData);
    this.generateGeoChart(groupedData);

    groupedData =  groupBy(this.kidnappedPeopleForSelectedCountry.all, 'gender');
    this.generateColumnChart(groupedData);

    groupedData =  groupBy(this.kidnappedPeopleForSelectedCountry.all, 'age_range');
    this.generatePieChart(groupedData);

  }

  private generateGeoChart(dataPerCountry): void{
    const data = [];

    // tslint:disable-next-line: forin
    for (const countryId in dataPerCountry) {
      data.push(
          [
            this.countries.find( (country) => {
              return country.id === countryId;
            }).nameEng ,
            dataPerCountry[countryId].length
         ]
      );
    }

    this.geoChart = {
      data,
      options: {
        showZoomOut: true,
        resolution: 'contries',
        colors: [
                  '#b7002d', '#a81b58', '#4b5072', '#49546d',
                  '#893773', '#65487b', '#4c5767', '#525960',
                  '#586067', '#5f676e', '#656e76', '#6c757d'
                ]
      }


    };
  }

  private generateColumnChart(dataPerGender): void{
    const genders = {
                    Female: { ar: 'أنثى', color: '#b7002d' },
                    Male  : { ar: 'ذكر' , color: '#495057' },
                    Other : { ar: 'أخر' , color: '#6c757d' }
                  };
    const data = [];

    // tslint:disable-next-line: forin
    for (const gender in dataPerGender) {
      data.push(
        [
          genders[gender].ar,
          dataPerGender[gender].length,
          genders[gender].color,
        ]
      );
    }

    this.cloumnChart = {
      data,
      columns: [
        'الجندر', 'العدد' , { role: 'style' }
      ],
      options: {
        colors: ['#fff']
      }
    };

  }


  private generatePieChart(dataPerAgeRange): void{
    const data = [];

    // tslint:disable-next-line: forin
    for (const ageRange in dataPerAgeRange) {
      data.push(
        [
          ageRange,
          dataPerAgeRange[ageRange].length
        ]
      );
    }
    // console.log(data);

    this.pieChart = {
      data,
      options: {
        colors: [
                  '#B7002D', '#495057', '#6C757D', '#525960',
                  '#586067', '#5f676e', '#656e76', '#6c757d'
        ]
      }

    };

  }

}
