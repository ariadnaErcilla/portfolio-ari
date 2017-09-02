import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSmartlinkComponent } from './portfolio-smartlink.component';

describe('PortfolioSmartlinkComponent', () => {
  let component: PortfolioSmartlinkComponent;
  let fixture: ComponentFixture<PortfolioSmartlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSmartlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSmartlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
