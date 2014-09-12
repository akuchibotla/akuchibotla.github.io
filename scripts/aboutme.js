$("h1").css({"opacity":"1"}).shuffleLetters();
$(document).ready(function() {

	$.getJSON("https://github.com/akuchibotla/akuchibotla.github.io/raw/master/test.json", function(data) {
		console.log("DATA: ", data);
	});

	var img_array = [];

	var prefix = 0;
	for (var i = 0; i < 52; i++){
		img_array.push("../files/me/" + i + ".png");
 	}
	$("#mousemove").css({"visibility":"visible", "opacity":"0"}).animate({
		opacity: "1"
	}, 500);
	$("#mousemove").threesixty({images:img_array, method:'mousemove', 'cycle':2, direction:"forward"});
});