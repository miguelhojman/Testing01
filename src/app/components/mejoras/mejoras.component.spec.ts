import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorasComponent } from './mejoras.component';

describe('MejorasComponent', () => {
  let component: MejorasComponent;
  let fixture: ComponentFixture<MejorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
