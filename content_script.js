
chrome.runtime.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
  		port.postMessage({counter: msg.counter+1});
	});
});
	
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	var focused = document.activeElement;
	if (focused) {
		focused.value = request.message;
	}
});