import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTrenesComponent } from './portfolio-trenes.component';

describe('PortfolioTrenesComponent', () => {
  let component: PortfolioTrenesComponent;
  let fixture: ComponentFixture<PortfolioTrenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTrenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTrenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
