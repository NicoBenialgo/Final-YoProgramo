import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaEducacionComponent } from './historia-educacion.component';

describe('HistoriaEducacionComponent', () => {
  let component: HistoriaEducacionComponent;
  let fixture: ComponentFixture<HistoriaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
