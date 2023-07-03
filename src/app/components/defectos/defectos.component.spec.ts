import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectosComponent } from './defectos.component';

describe('DefectosComponent', () => {
  let component: DefectosComponent;
  let fixture: ComponentFixture<DefectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
