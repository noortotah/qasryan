import { LandingComponent } from './pages/landing/landing.component';
import { ActivatedRoute } from '@angular/router';
import {  routerTransition } from '../../animations';
// import { stepper, routerTransition } from './../../animations';
import { Component, OnInit } from '@angular/core';
import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [routerTransition]
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.children[0].component === LandingComponent);
   }

  ngOnInit(): void {
  }

  getState(outlet): any {
    // console.log(outlet.activatedRouteData);
    return outlet.activatedRouteData.state;
  }

  isLanding(): boolean {
    return (this.activatedRoute.children[0].component === LandingComponent);
  }
}
