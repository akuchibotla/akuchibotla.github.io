$(".innerPanel").hide();

$(document).ready(function() {

	$("#panelContent").hide();
	$("#comicPanel").hide();
	$("#back").hide();

	$("#comicPanel").slideDown(1000);
	$(".innerPanel").delay(1000).fadeIn(2500);

	var handtimeout;
	var quoteJSON = null;

	$("#namehover").hover(function(){
		handtimeout = setTimeout(mouseEnter, 200);
	}, mouseExit);

	$("#back").click(function(event) {
			$("#back").slideUp();
			$("#panelContent").fadeOut();
			$("#comicPanel").slideDown(1000);
			$(".innerPanel").delay(1000).fadeIn(500);
	});

	// On click of caption
	$("#comicPanel").click(function(event) {
		$(".innerPanel").fadeOut(500);
		$("#comicPanel").delay(500).slideUp(1000);
		$("#back").delay(750).slideDown();

		// $("#"+event.target.id).fadeIn();

		if (event.target.id == "left") {
			header = "ABOUT ME";
		}
		else if (event.target.id == "middle") {
			header = "THINGS I'M PROUD OF";
		}
		else if (event.target.id == "right") {
			header = "HIRE ME";
		}

		$("h5").html(header);
		$("#panelContent").delay(2000).fadeIn(500);
	});

	$("#quoteBox").addClass("quoteBox").click(quoteRotate);
	$("#author").css("font-style", "normal");

	// Rotate quotes upon click
	function quoteRotate() {
		quote = $("#quote");
		// Pulling quote JSON from myjson.com servers
		if (quoteJSON === null) {
			$.ajax({
				url: "https://api.myjson.com/bins/3s43z",
				dataType: 'json',
				async: false,
				success: function(data) {
					quoteJSON = data['quoteAuthorPairs'];
				}
			});
		}
		do
			new_quote = quoteJSON[Math.floor((Math.random() * quoteJSON.length))];
		while (quote == new_quote);

		$('#quote').text('"' + new_quote['quote'] + '"');
		$('#author').text(new_quote['author']);

		quote = new_quote;
	}

	// Animations when mouse hovers over name
	function mouseEnter() {
		if ($(window).width() > 1150) {
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
	}

	// Return to normal state when mouse exits
	function mouseExit() {
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
});