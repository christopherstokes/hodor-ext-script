var p = $('p, h1, h2, h3, h4, h5, h6, a, label, li, code, span, time, td, th, strong, small');
//var div = $('div');

function replaceTextByTag(tag) {
	for (var i = 0; i < tag.length; i++) {
		var words = tag[i].innerText.split(' ');
		for (var j = 0; j < words.length; j++) {
			words[j] = 'Hodor'
		}
		tag[i].innerText = words.join(' ');
	}
};

replaceTextByTag(p);
//replaceTextByTag(div);

$(window).on("load", function() {
	replaceTextByTag(p);
});
