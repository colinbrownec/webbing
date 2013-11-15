// Copyright (c) 2013 Colin Brown

// Called when the user visits a new page
chrome.webNavigation.onCommitted.addListener(function(details) {
	if (details.frameId === 0) {
		console.log('Visiting ' + details.url);

		// fetch url and parse domain
		var url = details.url;
		var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
		var domain = matches && matches[1];

		console.log('Domain ' + domain);
	}s
});
