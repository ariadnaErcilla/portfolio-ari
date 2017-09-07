import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMakeyoursuitComponent } from './portfolio-makeyoursuit.component';

describe('PortfolioMakeyoursuitComponent', () => {
  let component: PortfolioMakeyoursuitComponent;
  let fixture: ComponentFixture<PortfolioMakeyoursuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMakeyoursuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMakeyoursuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
