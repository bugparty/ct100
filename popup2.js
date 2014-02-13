var winBackgroundPage = chrome.extension.getBackgroundPage();
	if(winBackgroundPage)
		document.write("<h3>已经处理:" + winBackgroundPage.Counter.get()+"</h3>");
	else 
		document.write("<h2>Error</h2>");
