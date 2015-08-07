$(".innerPanel").hide();
$("#quoteBox").hide();
$("#aboutMePanelContent").hide();
$("#thingsIPOPanelContent").hide();
$("#hireMePanelContent").hide();
$(".linkPanel").hide();
$("#comicPanel").hide();
$("#back").hide();

var quoteJSON;

// Pulling quote JSON from myjson.com servers
$.ajax({
	url: "https://api.myjson.com/bins/3s43z",
	dataType: 'json',
	async: true,
	success: function(data) {
		quoteJSON = data['quoteAuthorPairs'];
		$(document).ready(startSite(quoteJSON));
	}
});

function startSite(quoteJSON) {
	var activePanelId;
	$("#loading").fadeOut();
	$("#loadingCaption").fadeOut();
	$("#quoteBox").delay(1500).fadeIn();
	$("#comicPanel").delay(1500).slideDown(1000);
	$(".innerPanel").delay(2500).fadeIn(2000);
	$(".linkPanel").delay(2500).fadeIn(2000);

	var handtimeout;

	$("#namehover").hover(function(){
		handtimeout = setTimeout(mouseEnter, 200);
	}, mouseExit);

	$("#back").click(function(event) {
			$("#back").slideUp();
			$(activePanelId).fadeOut();
			$(".linkPanel").fadeOut();
			$("#comicPanel").slideDown(1000);
			$(".innerPanel").delay(1000).fadeIn(500);
			$(".linkPanel").delay(1000).fadeIn(500);
	});

	function showPanelContent(panelContentId) {
		activePanelId = panelContentId;
		$(".linkPanel").fadeOut();
		$(activePanelId).delay(2000).fadeIn(500);
		$(".linkPanel").delay(2000).fadeIn(500);
		$("#back").delay(2500).slideDown();
	}

	// On click of caption
	$("#comicPanel").click(function(event) {
		$(".innerPanel").fadeOut(500);
		$("#comicPanel").delay(500).slideUp(1000);

		// $("#"+event.target.id).fadeIn();

		if (event.target.id == "left") {
			$('#back').css('left', 125);
			showPanelContent('#aboutMePanelContent');
		}
		else if (event.target.id == "middle") {
			$('#back').css('left', 235);
			showPanelContent('#thingsIPOPanelContent');
		}
		else if (event.target.id == "right") {
			$('#back').css('left', 115);
			showPanelContent('#hireMePanelContent');
		}
	});

	$("#quoteBox").addClass("quoteBox").click(quoteRotate);
	$("#author").css("font-style", "normal");

	// Rotate quotes upon click
	function quoteRotate() {
		quote = $("#quote");
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
}
