var active = null;
var active_hash = null;
var projectlist = [];
var projectdesclist = [];
var appear_once = false;
$(function() {
	$("#skip").animate({opacity: 1}, 2000).click(appear);
	$("body").addClass("bgblack");
	space = "    ";
	string_possibilities = [
		["WAH", "WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CHECK OUT MY WORK" + space + space],
		["WHAT AM I PROUD OF?" + space, "ASOL", "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CHECK OUT MY WORK" + space + space],
		["WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JOST", "JUST KIDDING" + space, "CHECK OUT MY WORK" + space + space],
		["WHAT AM I PROUD OF?" + space, "ABSOLUTELY NOTHING" + space, "JUST KIDDING" + space, "CEHC", "CHECK OUT MY WORK" + space + space]
	];
  	$(".element").typed({
		strings: string_possibilities[Math.floor(Math.random() * string_possibilities.length)],
		typeSpeed: 0, // typing speed
		backSpeed: 0, // backspacing speed
		startDelay: 0, // time before typing starts
		backDelay: 3, // pause before backspacing
		loop: false, // loop on or off (true or false)
		loopCount: false, // number of loops, false = infinite
		showCursor: false,
		attr: null, // attribute to type, null = text for everything except inputs, which default to placeholder
		callback: appear // call function after typing is done
  	});
});

projectmaker = function(url, id) {
	url = "'" + url + "'";
	id = "'" + id + "'";
	proj = "<img src=" + url + " id=" + id + ">";
	projectlist.push(proj);
}

projdescmaker = function(heading, hash, desc) {
	projdesc = "<div class='desc' id=" + hash + "> <center> <h2> " + heading + " </h2> " + desc + " <b> <b> <h3> Click to close </h3> </center> </div>";
	projectdesclist.push(projdesc);
}

cascade = function(projectlist, delayval, fadeval, step) {
	for (var i = 0; i < projectlist.length; i++) {
		$(projectlist[i])
			.addClass("project")
			.data("elem", i)
			.delay(delayval)
			.appendTo("body")
			.animate({
				opacity: 1
			}, fadeval)
			.click(function(){
				if (active == null) {
					active = this;
					$(active)
						.addClass('projectclicked', 500);
					active_hash = "#" + $(projectdesclist[$(this).data("elem")]).attr('id');
					$(active_hash)
						.animate({
							opacity: 1
						}, 250)
						.addClass("descshowing")
						.click(function(event){
							event.stopImmediatePropagation();
							$(active_hash)
								.animate({
									opacity: 0
								}, 250)
								.removeClass("descshowing");
							$(active)
								.removeClass("projectclicked");
						});
				}
				else {
					$(active)
						.removeClass("projectclicked");
					$(active_hash)
						.animate({
							opacity: 0
						}, 250)
						.removeClass("descshowing");
					active = this;
					active_hash = "#" + $(projectdesclist[$(this).data("elem")]).attr('id');
					$(active)
						.addClass("projectclicked", 500);
					$(active_hash)
						.animate({
							opacity: 1
						}, 250)
						.addClass("descshowing")
						.click(function(event){
							event.stopImmediatePropagation();
							$(active_hash)
								.animate({
									opacity: 0
								}, 250)
								.removeClass("descshowing");
							$(active)
								.removeClass("projectclicked");
						});
				}
			});
		$(projectdesclist[i]).appendTo("body");
		delayval += step;
	}
}

appear = function() {
	if (appear_once == false) {
		appear_once = true;
		$(".element").fadeOut(1000);
		$(".element").remove();
		$("#skip").fadeOut(10);
		$("body").removeClass("bgblack");
		header = "<center> <h1 id='header'> THINGS I'M PROUD OF </h1> <center>";
		$(header).delay(1000).hide().appendTo("body").fadeIn(1000).queue(function(){
			projectmaker('../files/BJN1.png', 'bjn');
			projectmaker('../files/CalDining.png', 'cda');
			projectmaker('http://images.clipartpanda.com/india-clip-art-india_flag_map.png', 'bct');
			projdescmaker('Blue Jeans Intern', 'bjnd', 'Interned at Blue Jeans Network in the Summer of 2014. I created a customizable, scalable, end-to-end, production ready feedback tool displayed after every meeting in order to acquire conference quality data from millions of clients. It was a full-stack project and my time there lasted three months. It was an amazing experience!');
			projdescmaker('UC Berkeley Cal Dining Application', 'cdad', 'Two others and I created an application during a hackathon that webscrapes the official Cal Dining website to provide menus for breakfast, lunch, and dinner from all four major on-campus dining commons.');
			projdescmaker('Undergraduate Research - Bribecaster', 'bctd', 'Creating a crowdsourcing platform for Indian governemntal entities in efforts to keep the government more accountable by the public\'s standards');
			cascade(projectlist, 50, 50, 200);
		});
	}
}