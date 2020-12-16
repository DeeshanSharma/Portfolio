var sections = document.getElementsByTagName("section");
var classes = ["", " pink-colored", " purple-section", " purple-colored"];

var j = 0;
for (var i = 0; i < sections.length; i++) {
	sections[i].className += classes[j];
	j += 1;
	if (j > 3) {
		j = 0;
	}
}
