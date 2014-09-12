$(function(){
	space = "        ";
  	$(".element").typed({
		strings: ["ABSOLUTELY NOTHING" + space, "JOST", "JUST KIDDING" + space, "CHECK OUT MY WORK"],
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
	$(".element").fadeOut(1000);
	$("body").delay(1000).toggleClass("bodychanged");
	header1 = "<center> <h1> THINGS I'M PROUD OF </h1> <center>"
	$(header1).delay(1000).hide().appendTo("body").fadeIn(1000);
}