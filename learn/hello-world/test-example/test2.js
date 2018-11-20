var expect = require('expect.js');
var expected, current;
before(function() {
	expected = ['a', 'b', 'c'];
});
describe('String#split', function () {
	beforeEach() {
	  current = 'a,b,c'.split(',');
	}
	it('Should return an array', function () {
		expect(Array.isArray(current).to.be.true);
	});

	it('Should return the same array', function () {
		expect(expected.length).to.equal(current.length);
		for(let i = 0, length1 = expected.length; i < length1; i++){
			expect(expected[i]).equal(current[i]);
		}
	});
})