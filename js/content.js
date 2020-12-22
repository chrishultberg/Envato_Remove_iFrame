jQuery(document).ready(function(){

	// Check to see if we need to add our "Remove Frame" link
	// 	Perhaps Envato will bring it back one day...

	// If it doesn't exist, we need to add it!
	if( $('.preview__action--close').length == 0 ) {
		Add_Remove_Button();
		Add_Link();
	}

});

// Here is where we will add the button/link code
function Add_Remove_Button($return = false){
	$("#js-preview__actions").append("<div class='preview__action--close'></div>");
       	$(".preview__action--close").append("<a id='remove_link' href=''></a>");
       	$("#remove_link").append("<i class='e-icon -icon-cancel'></i><span>Remove Frame</span>");
}

// Here is where we get the link from the iFrame's source
function Add_Link() {

	if( $('#remove_link').length ) {
		var newUrl = document.getElementsByName('preview-frame')[0].src;
        	    $("#remove_link").attr("href", newUrl);
	}
}

