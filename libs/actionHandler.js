var actionHelper = (function(){
	
	var generateData = function(opt) {
		if(actionHelper.isEnabled() !== "true") {
			return;
		}

		var data = '';

		var command = $(opt).data('cmd');
		var cmdopts = $(opt).data('cmd-opts');

		data = chance[command](cmdopts);

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    	var tab = tabs[0];
	    	chrome.tabs.sendMessage(tab.id, {message: data}, function handler(response) {
	    	});
		});
	},

	isEnabled = function() {
		return localStorage.getItem("chrome.databychance.enabled") || "true";
	},

	setEnabled = function(val) {
		localStorage.setItem("chrome.databychance.enabled", val);
	},

	checkPluginEnabled = function() {
		if(actionHelper.isEnabled() === "false") {
			$("#enabled").html('<i class="fa fa-times"></i>&nbsp;Disabled').removeClass("btn-primary").addClass('btn-danger');
			$("#commands").hide();
			$("#disabledInstuction").show();
		}
		else{
			$("#enabled").html('<i class="fa fa-check"></i>&nbsp;Enabled').removeClass("btn-danger").addClass('btn-primary');	
			$("#commands").show();
			$("#disabledInstuction").hide();
		}
	}


	return {
		generateData: generateData,
		isEnabled	: isEnabled,
		setEnabled	: setEnabled,
		checkPluginEnabled: checkPluginEnabled
	}

})();