import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
describe('PostService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(PostService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=post.service.spec.js.map