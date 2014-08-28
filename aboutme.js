$("h1").css({"opacity":"1"}).shuffleLetters();
$(document).ready(function() {
	console.log("READY!");
	var img_array = [];

	var prefix = 0
	for (var i = 0; i < 450; i+=9){
		if (i < 10) {
			if (prefix < 10) {
				img_array.push("me_edited/_000" + prefix + "_me_00" + i + ".png");
				console.log(img_array.push("me_edited/_000" + prefix + "_me_00" + i + ".png"));
			}
			else {
				img_array.push("me_edited/_00" + prefix + "_me_00" + i + ".png");
				//console.log(img_array.push("me_edited/_00" + prefix + "_me_00" + i + ".png"));
			}
		}
		else if (i < 100) {
			if (prefix < 10) {
				img_array.push("me_edited/_000" + prefix + "_me_0" + i + ".png");
				//console.log(img_array.push("me_edited/_000" + prefix + "_me_0" + i + ".png"));
			}
			else {
				img_array.push("me_edited/_00" + prefix + "_me_0" + i + ".png");
				//console.log(img_array.push("me_edited/_00" + prefix + "_me_0" + i + ".png"));
			}
		}
		else {
			img_array.push("me_edited/_00" + prefix + "_me_" + i + ".png");
			console.log(img_array.push("me_edited/_00" + prefix + "_me_" + i + ".png"));
		}

		prefix ++;
	}
	$("#mousemove").css({"visibility":"visible", "opacity":"0"}).animate({
		opacity: "1"
	}, 500);
	$("#mousemove").threesixty({images:img_array, method:'mousemove', 'cycle':2, direction:"forward"});
});