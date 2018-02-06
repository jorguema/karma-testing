import { square } from '../app/custom-module';

describe('Users factory', function() {
  it('hass a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    debugger;
    console.log(square());
    expect(4).toEqual(4);
  });
});