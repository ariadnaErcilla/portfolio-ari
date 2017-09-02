import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProcterComponent } from './portfolio-procter.component';

describe('PortfolioProcterComponent', () => {
  let component: PortfolioProcterComponent;
  let fixture: ComponentFixture<PortfolioProcterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProcterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProcterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
