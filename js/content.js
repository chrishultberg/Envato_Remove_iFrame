jQuery(document).ready(function(){
	Add_Remove_Button();
	Add_Link();
});

function Add_Remove_Button($return = false){
	$("#js-preview__actions").append("<div class='preview__action--close'></div>");
       	$(".preview__action--close").append("<a id='remove_link' href=''></a>");
       	$("#remove_link").append("<i class='e-icon -icon-cancel'></i><span>Remove Frame</span>");
}

function Add_Link() {

	if( $('#remove_link').length ) {
		var newUrl = document.getElementsByName('preview-frame')[0].src;
        	    $("#remove_link").attr("href", newUrl);
	}
}

