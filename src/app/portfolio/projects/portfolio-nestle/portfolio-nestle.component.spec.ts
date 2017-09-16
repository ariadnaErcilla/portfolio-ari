import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNestleComponent } from './portfolio-nestle.component';

describe('PortfolioNestleComponent', () => {
  let component: PortfolioNestleComponent;
  let fixture: ComponentFixture<PortfolioNestleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNestleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNestleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
