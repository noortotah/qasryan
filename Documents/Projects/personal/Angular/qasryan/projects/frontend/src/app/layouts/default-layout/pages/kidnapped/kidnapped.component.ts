import { KidnappedPerson } from './../../../../models/kidnapped-person';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/frontend/src/app/reducers';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-kidnapped',
  templateUrl: './kidnapped.component.html',
  styleUrls: ['./kidnapped.component.scss']
})
export class KidnappedComponent implements OnInit , OnDestroy{
  id: string;
  routerSub: Subscription;
  kidnapped: KidnappedPerson;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.pipe(
      tap(
        (paramMap: ParamMap) => {
          if ( paramMap.has('id')){
            this.id = paramMap.get('id');
            console.log(this.id);
          }
        }
      ),
      switchMap(
        () => {
          return this.store.select('kidnapped');
        }
      ),
      tap( kidnappedState => {
        this.kidnapped = kidnappedState.kidnappedList.find(
          kidnappedPerson => kidnappedPerson.id === this.id
        );
        console.log(this.kidnapped);
      })
    ).subscribe();
  }

}
