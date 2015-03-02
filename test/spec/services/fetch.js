'use strict';

describe('Service: fetch', function () {

  // load the service's module
  beforeEach(module('portalApp'));

  // instantiate service
  var fetch;
  beforeEach(inject(function (_fetch_) {
    fetch = _fetch_;
  }));

  it('should do something', function () {
    expect(!!fetch).toBe(true);
  });

});
