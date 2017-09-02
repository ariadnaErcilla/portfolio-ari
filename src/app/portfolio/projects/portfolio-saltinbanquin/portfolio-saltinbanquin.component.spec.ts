import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSaltinbanquinComponent } from './portfolio-saltinbanquin.component';

describe('PortfolioSaltinbanquinComponent', () => {
  let component: PortfolioSaltinbanquinComponent;
  let fixture: ComponentFixture<PortfolioSaltinbanquinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSaltinbanquinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSaltinbanquinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
