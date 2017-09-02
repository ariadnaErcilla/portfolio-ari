import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioXerpaComponent } from './portfolio-xerpa.component';

describe('PortfolioXerpaComponent', () => {
  let component: PortfolioXerpaComponent;
  let fixture: ComponentFixture<PortfolioXerpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioXerpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioXerpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
