import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanearComponent } from './escanear.component';

describe('EscanearComponent', () => {
  let component: EscanearComponent;
  let fixture: ComponentFixture<EscanearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscanearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
