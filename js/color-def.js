var sections = document.getElementsByTagName("section");
var buttons = document.querySelectorAll(".section .link");
var sectionClasses = ["", " pink-colored", " purple-section", " purple-colored"];
var buttonClasses = [" primary-link", " secondary-link"];
var url = window.location.pathname;

var i = 0;
var j = 0;
for (var k = 0; k < sections.length; k++) {
	sections[k].className += sectionClasses[i];
	i += 1;
	if (i > 3) {
		i = 0;
	}
	if (url === "/blogs") {
		buttons[k].className += buttonClasses[j];
		j += 1;
		if (j > 1) {
			j = 0;
		}
	}
}
