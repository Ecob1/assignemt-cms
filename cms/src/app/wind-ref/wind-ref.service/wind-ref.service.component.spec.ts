import { TestBed } from '@angular/core/testing';
import { WinRefService } from './wind-ref.service.component';

describe('WinRefService', () => {
  let service: WinRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
