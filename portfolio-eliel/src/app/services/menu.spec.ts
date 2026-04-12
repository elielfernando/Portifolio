import { TestBed } from '@angular/core/testing';
import { Menu } from '../models/menu';


describe('Menu', () => {
  let service: Menu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
