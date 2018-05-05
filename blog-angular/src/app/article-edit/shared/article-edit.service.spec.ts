import { TestBed, inject } from '@angular/core/testing';

import { ArticleEditService } from './article-edit.service';

describe('ArticleEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleEditService]
    });
  });

  it('should be created', inject([ArticleEditService], (service: ArticleEditService) => {
    expect(service).toBeTruthy();
  }));
});
