import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSchweppesComponent } from './portfolio-schweppes.component';

describe('PortfolioSchweppesComponent', () => {
  let component: PortfolioSchweppesComponent;
  let fixture: ComponentFixture<PortfolioSchweppesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSchweppesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSchweppesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
