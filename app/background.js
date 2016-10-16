var newTab = function() {
	chrome.tabs.create({url: chrome.extension.getURL("base.html")});
};


chrome.browserAction.onClicked.addListener(newTab);




