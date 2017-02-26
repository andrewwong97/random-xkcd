var newTab = function() {
	chrome.tabs.create({url: chrome.extension.getURL("base.html")});
};

chrome.browserAction.onClicked.addListener(newTab);

chrome.tabs.onCreated.addListener(function(tab) {
	chrome.tabs.update(tab.tabId, {url: chrome.extension.getURL("base.html")});
});

