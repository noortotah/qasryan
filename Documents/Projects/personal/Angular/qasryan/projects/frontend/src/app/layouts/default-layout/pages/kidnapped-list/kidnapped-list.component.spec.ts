import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidnappedListComponent } from './kidnapped-list.component';

describe('KidnappedListComponent', () => {
  let component: KidnappedListComponent;
  let fixture: ComponentFixture<KidnappedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidnappedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidnappedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
