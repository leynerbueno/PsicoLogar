import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCadastroComponent } from './pag-cadastro.component';

describe('PagCadastroComponent', () => {
  let component: PagCadastroComponent;
  let fixture: ComponentFixture<PagCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
