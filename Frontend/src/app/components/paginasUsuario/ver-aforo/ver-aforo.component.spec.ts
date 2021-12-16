import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAforoComponent } from './ver-aforo.component';

describe('VerAforoComponent', () => {
  let component: VerAforoComponent;
  let fixture: ComponentFixture<VerAforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
