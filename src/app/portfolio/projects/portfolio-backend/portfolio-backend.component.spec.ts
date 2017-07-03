import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBackendComponent } from './portfolio-backend.component';

describe('PortfolioBackendComponent', () => {
  let component: PortfolioBackendComponent;
  let fixture: ComponentFixture<PortfolioBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
