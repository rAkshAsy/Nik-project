PopUpHide();

function PopUpHide() {
	$('#artPopup').hide();
	$('.header, .main, .footer').removeClass("for_elements_by_article")

}

function PopUpShow() {
	$('#artPopup').show();
	$('.header, .main, .footer').addClass("for_elements_by_article")
}
