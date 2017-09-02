import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBoxeadorComponent } from './portfolio-boxeador.component';

describe('PortfolioBoxeadorComponent', () => {
  let component: PortfolioBoxeadorComponent;
  let fixture: ComponentFixture<PortfolioBoxeadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBoxeadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBoxeadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
