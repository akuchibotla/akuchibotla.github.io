$("h1").css({"opacity":"1"}).shuffleLetters();
$(document).ready(function() {
	var img_array = [];

	for (var i = 0; i < 46; i++){
		img_array.push("cookie_frames/" + i + ".gif");
	}
	$("#mousemove").css({"visibility":"visible", "opacity":"0"}).animate({
		opacity: "1"
	}, 500);
	$("#mousemove").threesixty({images:img_array, method:'mousemove', 'cycle':2, direction:"forward"});
});