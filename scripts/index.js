var handtimeout;

$("#namehover").hover(function(){
	handtimeout = setTimeout(mouseenter, 200);
}, mouseexit);

$("#quoteBox").addClass("quoteBox").click(quoteRotate);
$("#author").css("font-style", "normal");

function quoteRotate() {
	$('#quote').text('"Many failures are from people who didn\'t realize how close they were to success when they gave up"');
	$('#author').text("Edison");
}

function mouseenter() {
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
}

function mouseexit() {
	clearTimeout(handtimeout);
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
}