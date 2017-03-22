$( document ).ready(function() {
	//Hide webkit default input[file] styling
    $('#button').click(function () {
	    $("input[type='file']").trigger('click');
	})

	$("input[type='file']").change(function () {
	    $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
	})

	//Tabs
	$('#tabs').tabs();
});