(function($) {

	function initialise() {
		var searchForm = $('.form--search');
		if(searchForm.length) {
			searchForm.click(function(){
				$('.search-overlay').toggleClass('is-showing');
				$('.search-container').toggleClass('is-showing');
				$('.l-page-container').toggleClass('is-blurred-heavy');
				$('.panel-left').toggleClass('is-blurred-heavy');
				$('html').toggleClass('no-scroll');
				$('.search__input-search').select();
			});
		}
	};

	$(document).ready(function(){
		initialise();
	});

})(jQuery);