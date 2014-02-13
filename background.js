
// http://heuet.tsk.erya100.com/flash/videoplay/flash_main.js?t=201204060226

var Counter = function(){
			var i =0;
				return{ "add":function(){return ++i},
						"get":function(){return i}}
				}();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.action == "addCounter")
      sendResponse({status: "counted"+Counter.add()});
  });
 
