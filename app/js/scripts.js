(function($) {

	initLeftPanelInteraction();

	function initLeftPanelInteraction() {
		$('.js-hamburger-button').on("click", function(){
			$(this).toggleClass('is-selected');
			$('.l-page-container').toggleClass('panel-left-open');
		});
	}

})(jQuery);