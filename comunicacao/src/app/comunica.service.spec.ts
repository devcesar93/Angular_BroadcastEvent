import { TestBed } from '@angular/core/testing';

import { ComunicaService } from './comunica.service';

describe('ComunicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicaService = TestBed.get(ComunicaService);
    expect(service).toBeTruthy();
  });
});
