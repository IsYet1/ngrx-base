import * as from from './.actions';

describe('apps', () => {
  it('should return an action', () => {
    expect(from.apps().type).toBe('[] App s');
  });
});
