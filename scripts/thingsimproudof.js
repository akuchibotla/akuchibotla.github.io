var appear_once = false;
$(function() {
	$("#skip").animate({opacity: 1}, 2000).click(appear);
	$("body").toggleClass("bgblack");
	space = "    ";
	string_possibilities = [
		["WAH", "WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CHECK OUT MY WORK" + space],
		["WHAT AM I PROUD OF?" + space, "ASOL", "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CHECK OUT MY WORK" + space],
		["WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JOST", "JUST KIDDING" + space, "CHECK OUT MY WORK" + space],
		["WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CEHC", "CHECK OUT MY WORK" + space]
	];
  	$(".element").typed({
		strings: string_possibilities[Math.floor(Math.random() * string_possibilities.length)],
		typeSpeed: 20, // typing speed
		backSpeed: 0, // backspacing speed
		startDelay: 10, // time before typing starts
		backDelay: 10, // pause before backspacing
		loop: false, // loop on or off (true or false)
		loopCount: false, // number of loops, false = infinite
		showCursor: false,
		attr: null, // attribute to type, null = text for everything except inputs, which default to placeholder
		callback: appear // call function after typing is done
  	});
});

appear = function() {
	if (appear_once == false) {
		appear_once = true;
		$(".element").fadeOut(1000);
		$(".element").remove();
		$("#skip").fadeOut(1000);
		$("body").toggleClass("bgwhite");
		header1 = "<center> <h1> THINGS I'M PROUD OF </h1> <center>";
		$(header1).delay(1000).hide().appendTo("body").fadeIn(1000);
	}
}