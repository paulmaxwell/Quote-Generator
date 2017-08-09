$(document).ready(function() {  

	// API info https://forismatic.com/en/api/
	function getQuote() {
		$.getJSON({
			url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
			success: function(data) {
				document.getElementById("quote").innerHTML = data.quoteText;
				document.getElementById("author").innerHTML = data.quoteAuthor;
				tweetURL = "https://twitter.com/intent/tweet?&text=" + '"' + data.quoteText + '" - ' + data.quoteAuthor;
				}
		});
	}

	getQuote();

	$("#new").click(function() {
		getQuote();
	});

	$("#tweet").click(function() {
		window.open(tweetURL);
	});	

});// end jQuery











