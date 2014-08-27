$("h1").css({"opacity":"1"}).shuffleLetters();
$(document).ready(function() {
	console.log("READY!");
	var img_array = [];

	for (var i = 0; i < 450; i+=9){
		if (i < 10) {
			console.log("HERE 1");
			img_array.push("me/me_00" + i + ".png");
		}
		else if (i < 100) {
			console.log("HERE 2");
			img_array.push("me/me_0" + i + ".png");
		}
		else {
			console.log("HERE 3");
			img_array.push("me/me_" + i + ".png");
		}
	}
	$("#mousemove").css({"visibility":"visible", "opacity":"0"}).animate({
		opacity: "1"
	}, 500);
	$("#mousemove").threesixty({images:img_array, method:'mousemove', 'cycle':2, direction:"forward"});
});