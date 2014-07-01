ReadMore = "Click to show more";

AboutMe = "RAPPER | HACKER | STUDENT";
Projects = "Things I'm Proud Of"

$("#name").mouseenter(function() {
	$("#name").css({width: "100%"});
	$("#leftHand").animate({
		opacity: "1",
		marginLeft: "-300px"
	}, 400);
	$("#rightHand").animate({
		opacity: "1",
		marginLeft: "-13px"
	}, 400);
	$("#firstName").animate({
		marginRight: "800px"
	}, 400);
	$("#lastName").animate({
		marginLeft: "575px",
		fontSize: "140",
		marginTop: "-57px"
	}, 400);
}).mouseleave(function() {
	$("#firstName").animate({
		marginRight: "0px"
	}, 500);
	$("#lastName").animate({
		marginLeft: "0px",
		fontSize: "55",
		marginTop: "0px"
	}, 500);
	$("#leftHand").animate({
		opacity: "0.65",
		marginLeft: "-372px"
	}, 500);
	$("#rightHand").animate({
		opacity: "0.65",
		marginLeft: "343px"
	}, 500);
});

$("#AMB").append("In a Nutshell");

$("#PB").append("Things I'm Proud Of");

$("#AMB").mouseenter(function() {
	$("#AMC").append("<div id='more'></div>").css({"position":"relative", "top":"-110px", "font-family":"Kameron"});
	$("#more").append(ReadMore);
	$("#AMC").append("<span class='aboutMeContent'>" + AboutMe + "</span>").css({"position":"relative", "width":"75%", "margin":"0 auto"}).fadeIn();
}).mouseleave(function() {
	$.when(fader()).then(emptier());
	function fader() {
		$("#AMC").fadeOut().css({"border":"0px"});
	};
	function emptier() {
		$("#AMC").empty();
	};
});