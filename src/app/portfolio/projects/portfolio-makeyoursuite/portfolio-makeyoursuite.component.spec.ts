import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMakeyoursuiteComponent } from './portfolio-makeyoursuite.component';

describe('PortfolioMakeyoursuiteComponent', () => {
  let component: PortfolioMakeyoursuiteComponent;
  let fixture: ComponentFixture<PortfolioMakeyoursuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMakeyoursuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMakeyoursuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
