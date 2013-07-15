#usage

```javascript

var textArray = ['asdf','fdsa'];

var view = bourbon(textArray); //Define a subject

view.update = function(range) {
	this.model = this.model.slice(0,range[0])
		+ this.subject.slice(range[0],range[1])
		+ this.model.slice(range[1]);
}

```
