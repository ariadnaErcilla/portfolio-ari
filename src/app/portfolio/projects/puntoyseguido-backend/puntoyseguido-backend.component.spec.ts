import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoyseguidoBackendComponent } from './puntoyseguido-backend.component';

describe('PuntoyseguidoBackendComponent', () => {
  let component: PuntoyseguidoBackendComponent;
  let fixture: ComponentFixture<PuntoyseguidoBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoyseguidoBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoyseguidoBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
