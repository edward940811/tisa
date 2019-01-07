import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserDetailComponent } from './sponser-detail.component';


describe('SponserDetailComponent', () => {
  let component: SponserDetailComponent;
  let fixture: ComponentFixture<SponserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
