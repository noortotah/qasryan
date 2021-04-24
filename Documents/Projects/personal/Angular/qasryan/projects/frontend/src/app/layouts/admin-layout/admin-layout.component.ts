import { AppState } from './../../reducers/index';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Feather from 'feather-icons';
import {  Subscription } from 'rxjs';
import { ToggleNavbarCollapsed } from './store/admin-layout.actions';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  isCollapsed: boolean;
  isCollapsedSub : Subscription

  constructor(private store: Store<AppState>) {

  }

  ngOnDestroy(): void {
    this.isCollapsedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.isCollapsedSub = this.store.select('adminLayout').subscribe(adminLayoutState => {
        this.isCollapsed = adminLayoutState.isCollapsed;
    });
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  toggleSidebar() {
    this.store.dispatch( new ToggleNavbarCollapsed() );
  }

}
