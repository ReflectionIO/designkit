// V2 Components JS

var PrimaryFilters = function() {
	var instance = this;
	$("html").on("click", function(e){
		// close open filters on html click
		if(!$(e.target).hasClass("js-dropdown-trigger")) {
			instance.closeAllFilters();
		}
	});
}

PrimaryFilters.prototype.closeAllFilters = function() {
	$('.primary-filter.is-open .form-field--select__dropdown').hide();
	$('.primary-filter.is-open').removeClass("is-open");
};

var FormFieldSelect = function($domElement) {

	var $thisSelectBox = $domElement,
			$dropDownContainer = $("<ul>").addClass("form-field--select__dropdown"),
			$currentValue = $("<span>").addClass("form-field--select__box ref-icon-after--angle-down js-dropdown-trigger");

	$thisSelectBox.find('option').each(function(){
		
		var $thisOption = $(this),
				selectedClass = "";

		if($thisOption.val() != "") {

			if($thisOption.is(":selected")) {
				if($thisOption.val() != "") {
					selectedClass = "is-selected";
					$currentValue.text($thisOption.text());
				}
			}

			$dropDownContainer.append($("<li>")
																		.addClass("js-dropdown-option")
																		.text($thisOption.text())
																		.addClass(selectedClass)
																		.on("click", function(){
																			$thisSelectBox.find("option").removeAttr("selected");
																			$thisOption.attr("selected", "selected");
																			$currentValue.text($thisOption.text());
																			$dropDownContainer.toggle();
																			$thisSelectBox.parent("div").toggleClass("is-open");
																			$thisSelectBox.parent("div").removeClass("nothing-selected");
																			$dropDownContainer.find(".is-selected").removeClass("is-selected");
																			$(this).addClass("is-selected");
																		})
															);
		}

	});

	$currentValue.on("click", function(){
		var $parentDiv = $thisSelectBox.parent("div");
		if(!$parentDiv.hasClass("is-open")) {
			PrimaryFilters.prototype.closeAllFilters();
		}
		var parentWidth = $parentDiv.width();
		var parentHeight = $parentDiv.height();
		$dropDownContainer.css({"min-width": parentWidth + "px"});
		$dropDownContainer.toggle();	
		$parentDiv.toggleClass("is-open");
	});

	if($currentValue.text() == "") {
		$thisSelectBox.parent("div").addClass("nothing-selected");
	}

	$thisSelectBox.parent("div").append($currentValue)
															.append($dropDownContainer);
};

var FormInteractions = function() {
	setTimeout(function(){
		$('.form-field input[type=email], .form-field input[type=password], .form-field input[type=text], .form-field textarea').each(function(){
			var $this = $(this);
			var $thisParent = $this.parent('.form-field');
			if(!$thisParent.hasClass('form-field--error')) {
				if(!$(this).val().length || $(this).val().length == 0) {
					$thisParent.addClass('is-closed');
				}
				$this.on("focus", function(){
					$thisParent.removeClass('is-closed');
				});
				$this.on("blur", function(){
					if(!$this.val().length) {
						$thisParent.addClass('is-closed');
					}
				});
			}
		});
	}, 100); // fixes bug in IE11 for prepopulated data
};


var Tabs = function($domElement) {

	var $tabsList = $domElement;
	$tabsList.find("li").each(function(){
		$(this).find("a").on("click", function(e){
			e.preventDefault();
			var $this = $(this),
					associatedContentId = $this.attr("href");
			$domElement.find('.is-active').removeClass("is-active");
			$this.parent("li").addClass("is-active");

			var associatedContentList = $(associatedContentId).parent(".js-tabs-content-list");
			associatedContentList.find('.is-active').removeClass("is-active");
			$(associatedContentId).addClass("is-active");
		});
	});

};

