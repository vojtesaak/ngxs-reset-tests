import {TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {UserState} from './users.state';

describe('userState', () => {
  let store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxsModule.forRoot([UserState])],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  afterEach(() => {
    store.reset({});
  });

  it('should contain state', () => {
    store.reset({
      userdata: {
        id: 13,
        name: 'John Doe'
      }
    });
    expect(store.snapshot()).toEqual({
      userdata: {
        id: 13,
        name: 'John Doe'
      }
    });
  });

  it('should NOT contain state', () => {
    expect(store.snapshot()).toEqual({});
  });
});
