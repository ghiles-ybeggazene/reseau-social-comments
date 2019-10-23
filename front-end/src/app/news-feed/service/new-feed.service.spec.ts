import { TestBed, inject } from '@angular/core/testing';

import { NewFeedService } from './new-feed.service';

describe('NewFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewFeedService]
    });
  });

  it('should be created', inject([NewFeedService], (service: NewFeedService) => {
    expect(service).toBeTruthy();
  }));
});
