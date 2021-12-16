import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanearSComponent } from './escanear-s.component';

describe('EscanearSComponent', () => {
  let component: EscanearSComponent;
  let fixture: ComponentFixture<EscanearSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscanearSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
