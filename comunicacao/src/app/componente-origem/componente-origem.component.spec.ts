import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOrigemComponent } from './componente-origem.component';

describe('ComponenteOrigemComponent', () => {
  let component: ComponenteOrigemComponent;
  let fixture: ComponentFixture<ComponenteOrigemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteOrigemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
