import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImpremtaComponent } from './portfolio-impremta.component';

describe('PortfolioImpremtaComponent', () => {
  let component: PortfolioImpremtaComponent;
  let fixture: ComponentFixture<PortfolioImpremtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioImpremtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioImpremtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
