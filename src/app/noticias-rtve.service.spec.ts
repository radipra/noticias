import { TestBed } from '@angular/core/testing';

import { NoticiasRTVEService } from './noticias-rtve.service';

describe('NoticiasRTVEService', () => {
  let service: NoticiasRTVEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasRTVEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
