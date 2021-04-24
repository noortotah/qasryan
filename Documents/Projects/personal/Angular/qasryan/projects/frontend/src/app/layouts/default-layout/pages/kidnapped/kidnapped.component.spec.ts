import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidnappedComponent } from './kidnapped.component';

describe('KidnappedComponent', () => {
  let component: KidnappedComponent;
  let fixture: ComponentFixture<KidnappedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidnappedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidnappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
