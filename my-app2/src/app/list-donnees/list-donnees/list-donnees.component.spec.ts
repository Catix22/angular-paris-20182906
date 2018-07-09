import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonneesComponent } from './list-donnees.component';

describe('ListDonneesComponent', () => {
  let component: ListDonneesComponent;
  let fixture: ComponentFixture<ListDonneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDonneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
