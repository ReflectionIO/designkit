(function($) {

	function initialise() {
		// Open search functionality
		var searchForm = $('.form--search__input-search');
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

		initSearch();
	};

	function initSearch() {
		// get mock data - for now set explicit, will become an ajax call to read a file that returns a json object
		var data;
		$.ajax({
        url: "js/search-data.txt",
        async: true,
        dataType: "json",
        success: function (items){
        	console.log('success');
          data = items;
          console.log(data);
        }
    });
		
		var inputValue,
				$appsList = $('.js-item-results--apps ul'),
				$devList = $('.js-item-results--developers ul');

		// on key press loop through object and search
		$('.js-get-items').keyup(function(){
			searchResultsApps = [];
			searchResultsDevs = [];
			inputValueCaseInsensitiveRegEx = new RegExp($(this).val(), "i");

			// if found add to result array
			for(var i = 0; i < data.items.length; i++) {
				if(data.items[i].name.search(inputValueCaseInsensitiveRegEx) > -1) {
					searchResultsApps.push(data.items[i]);
				}
				if(data.items[i].creatorName.search(inputValueCaseInsensitiveRegEx) > -1) {
					searchResultsDevs.push(data.items[i]);
				}
			}
			
			// output results to screen
			$appsList.empty();
			for(var i = 0; i < searchResultsApps.length; i++) {
				$appsList.append($('<li>').append($('<a>').append($('<img>').attr("src", "" + searchResultsApps[i].smallImage + "")).append($('<span>').text(searchResultsApps[i].name))));
			}

			$devList.empty();
			for(var i = 0; i < searchResultsDevs.length; i++) {
				$devList.append($('<li>').append($('<a>').append($('<span>').text(searchResultsDevs[i].creatorName))));
			}
		});
	};

	$(document).ready(function(){
		initialise();
	});

})(jQuery);