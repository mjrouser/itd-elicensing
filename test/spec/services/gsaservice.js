'use strict';

describe('Service: GSAservice', function () {

  // load the service's module
  beforeEach(module('portalApp'));

  // instantiate service
  var GSAservice;
  beforeEach(inject(function (_GSAservice_) {
    GSAservice = _GSAservice_;
  }));

  it('should do something', function () {
    expect(!!GSAservice).toBe(true);
  });

});
