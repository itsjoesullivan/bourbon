var Bourbon = function(subject) {
	this.subject = subject;
	this.raw = [];
	this.update();
};

Bourbon.prototype.update = function() {
	if(!arguments.length) {
		this.raw = this.subject.slice();
	}
};

var bourbon = module.exports = function(subject) {
	return new Bourbon(subject)
};

