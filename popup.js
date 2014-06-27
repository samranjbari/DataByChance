
document.addEventListener('DOMContentLoaded', function() {
	
	actionHelper.checkPluginEnabled();

	$('#pop').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		window.open(chrome.extension.getURL("popup.html"),"gc-popout-window","width =560,height=550");
	});
	$("#enabled").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		var enabled = actionHelper.isEnabled();
		if(enabled === "true")
			actionHelper.setEnabled(false);
		else
			actionHelper.setEnabled(true);

		actionHelper.checkPluginEnabled();
	});

	$('.btn.btn-xs.btn-primary').on(
		'click', function() { actionHelper.generateData(this); });

});