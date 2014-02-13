console.log("start injecttion");

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('fackFunction.js');
console.log(s.src);

s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
chrome.runtime.sendMessage({action: "addCounter"}, function(response) {
		console.log(response.status);
	});

