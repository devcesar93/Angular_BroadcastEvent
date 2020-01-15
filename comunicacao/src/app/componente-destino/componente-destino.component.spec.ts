import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDestinoComponent } from './componente-destino.component';

describe('ComponenteDestinoComponent', () => {
  let component: ComponenteDestinoComponent;
  let fixture: ComponentFixture<ComponenteDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
