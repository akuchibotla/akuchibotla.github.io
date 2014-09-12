AboutMe = "In a Nutshell";
Projects = "Things I'm Proud Of";
Resume = "Hire Me";

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

$("#AMB").append(AboutMe);
$("#PB").append(Projects);
$("#RS").append(Resume);

$("#AMB").click(function() {
	$("html").velocity({marginLeft: "-1500px", marginTop:"-1500px", opacity: "0"}, 500).velocity("fadeOut").queue(function() {
		location = "src/aboutme.html";
	});
});

$("#PB").click(function() {
	$("html").velocity({marginRight: "-1500px", opacity: "0"}, 500).velocity("fadeOut").queue(function() {
		location = "src/thingsimproudof.html";
	});
});