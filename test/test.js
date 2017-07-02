var expect = require('chai').expect;

describe('Something', function(){
  it('should do something', function(){
    return expect({a:1}).to.not.have.property('b');
  });
});
