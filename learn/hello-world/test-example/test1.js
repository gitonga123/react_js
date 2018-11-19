var assert = require('assert');
var expected, current;

before(function () {
	expected = ['a','b', 'c'];
});

describe('String#split', function () {
	beforeEach(function(){
		current = 'a,b,c'.split(',')
	});

	it('should return an array', function() {
		assert(Array.isArray(current));
	});

	it('Shoud return the same array', function() {
		assert.equal(expected.length, current.length, 'arrays have equal length');

		for(let i = 0, length1 = expected.length; i < length1; i++){
			assert.equal(expected[i], current[i], i + 'element is equal');
		}
	})
});