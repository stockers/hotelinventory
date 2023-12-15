import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the message to both stream references', () => {    
    service.subject$.subscribe(message => {
      expect(message).toBe('Hello');
    })
    service.subject$.subscribe(message => {
      expect(message).toBe('Hello');
    })
    service.setData('Hello');
  })
});
