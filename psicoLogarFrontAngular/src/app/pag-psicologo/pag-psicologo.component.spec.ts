import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPsicologoComponent } from './pag-psicologo.component';

describe('PagPsicologoComponent', () => {
  let component: PagPsicologoComponent;
  let fixture: ComponentFixture<PagPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
