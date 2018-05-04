import { TestBed, inject } from '@angular/core/testing';

import { ArticleNewService } from './article-new.service';

describe('ArticleNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleNewService]
    });
  });

  it('should be created', inject([ArticleNewService], (service: ArticleNewService) => {
    expect(service).toBeTruthy();
  }));
});
