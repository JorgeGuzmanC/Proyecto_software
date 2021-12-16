import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAforoComponent } from './config-aforo.component';

describe('ConfigAforoComponent', () => {
  let component: ConfigAforoComponent;
  let fixture: ComponentFixture<ConfigAforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
