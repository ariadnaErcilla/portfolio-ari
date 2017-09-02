import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTedclothingComponent } from './portfolio-tedclothing.component';

describe('PortfolioTedclothingComponent', () => {
  let component: PortfolioTedclothingComponent;
  let fixture: ComponentFixture<PortfolioTedclothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTedclothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTedclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
