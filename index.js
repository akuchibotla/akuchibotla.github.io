ReadMore = "Click to show more";

AboutMe = "RAPPER | HACKER | STUDENT";
Projects = "Things I'm Proud Of"

$("#namehover").mouseenter(function() {
	$("#leftHand").velocity({
		opacity: "1",
		marginLeft: "-300px"
	}, 400);
	$("#rightHand").velocity({
		opacity: "1",
		marginLeft: "-13px"
	}, 400);
	$("#firstName").velocity({
		marginRight: "800px"
	}, 400);
	$("#lastName").velocity({
		marginLeft: "575px",
		fontSize: "140",
		marginTop: "-57px"
	}, 400);
}).mouseleave(function() {
	$("#firstName").velocity({
		marginRight: "0px"
	}, 500);
	$("#lastName").velocity({
		marginLeft: "0px",
		fontSize: "55",
		marginTop: "0px"
	}, 500);
	$("#leftHand").velocity({
		opacity: "0",
		marginLeft: "-372px"
	}, 500);
	$("#rightHand").velocity({
		opacity: "0",
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
}).click(function() {
	$("html").velocity({marginLeft: "-1500px", marginTop:"-1500px", opacity: "0"}, 500).fadeOut(function() {
		location = "aboutme.html";
	});
});

$("#PB").click(function() {
	$("html").velocity({marginLeft: "-1500px", marginTop:"-1500px", opacity: "0"}, 500).fadeOut(function() {
		location = "thingsimproudof.html";
	});
});