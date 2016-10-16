function getRandomInt(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  if (num === 404) {
  	num = 404 + 1;
  }
  return num;
};

var setUrls = function() {
	var rand = getRandomInt(0, 1746);
	var url = "http://www.xkcd.com/" + rand;

	// Set Permalink
	document.getElementById("permalink").href = url;
	document.getElementById("permalink").innerHTML = "Permalink: " + url;

	$.get(url, function(data) {
		// Set Image
		var page = document.createElement("html");
		page.innerHTML = data;

		var comic = page.getElementsByTagName("img")[1];
		var image = comic.src;
		var result = "http://" + image.substring(image.indexOf("chrome-extension://") + 19);
		document.getElementById("target").src = result;

		// Set Title and Caption
		document.getElementById("title").innerHTML = comic.alt;
		document.getElementById("caption").innerHTML = comic.title;
	});
};


$(function() {
	setUrls();
});







