var bourbon = require('./index');
var b;
describe('bourbon', function() {
	it('exists', function() {
		(typeof bourbon).should.equal('function');
	});
	it('stores subject as this.subject', function() {
		var s = [];
		s.push('asdf');
		var b = bourbon(s);
		b.subject.should.equal(s);
		b.subject[0].should.equal('asdf');
	});
	describe('.update', function() {
		it('exists', function() {
			b = bourbon('asdf');
			(typeof b.update).should.equal('function');
		});
		it('default updates the array', function() {
			var arr = ['asdf'];
			b = bourbon(arr);
			arr[0] = 'fdsa'
			b.update();
			b.raw[0].should.equal('fdsa');
		});
	});
});
