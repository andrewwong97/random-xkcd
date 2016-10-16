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
	$.get(url, function(data) {
		var page = document.createElement("html");
		page.innerHTML = data;
		var image = page.getElementsByTagName("img")[1].src;
		var start = image.indexOf("chrome-extension://") + 19;
		var result = "http://" + image.substring(start);
		document.getElementById("target").src = result;
	});

	document.getElementById("permalink").href = url;
	document.getElementById("permalink").innerHTML = "Permalink: " + url;
};


$(function() {
	setUrls();
});







