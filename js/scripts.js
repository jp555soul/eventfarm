$( document ).ready(function() {
	//Hide webkit default input[file] styling
    $('#button').click(function () {
	    $("input[type='file']").trigger('click');
	});

	$("input[type='file']").change(function () {
	    $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
	});

	//Tabs
	$('#tabs').tabs();

	//Local Storage Image Upload
	function localImageStorage(evt) {
		var files = evt.target.files; 

	    for (var i = 0, j; j = files[i]; i++){
	      if (!j.type.match('image.*')) {
	      	continue;
	      }

	      var reader = new FileReader();

	      reader.onload = (function(theImage) {
	      	return function(e) {
	      		var date = new Date();
	        	var div = $("<div>", {"class":"row"});
	        	div.html('<img class="img-thumbnail" src="'+ e.target.result+ '" title="'+ escape(theImage.name)+ '"/><div class="meta-data"><p>'+ escape(theImage.name) +'</p><p>' + date + '</p></div><div class="delete"><span class="glyphicon glyphicon-remove" onclick="deleteLocalStorage()"></span></div>');
	        	$('#output_image').html(div, null);
	        	localStorage.setItem('img', e.target.result);
	        	localStorage.setItem('title', theImage.name);
	        	localStorage.setItem('upload_date', date);

	        };
	    })(j);
	    reader.readAsDataURL(j);
	  }
	}

	document.getElementById('images').addEventListener('change', localImageStorage, false);

	if(localStorage.img){
	    var div = $("<div>", {"class":"row"});
		div.html('<img class="img-thumbnail" src="' + localStorage.img + '"/><div class="meta-data"><p>' + localStorage.title + '</p><p>' + localStorage.upload_date + '</p></div><div class="delete"><span class="glyphicon glyphicon-remove" onclick="deleteLocalStorage()"></span></div>');
		$('#output_image').html(div, null);
	}

});

function deleteLocalStorage(){
	localStorage.clear();
	$('#output_image').empty();
}