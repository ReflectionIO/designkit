// V2 Components JS

var FormFieldSelect = function($domElement) {

	var $thisSelectBox = $domElement,
			$dropDownContainer = $("<ul>").addClass("form-field--select__dropdown"),
			$currentValue = $("<span>");

	$thisSelectBox.find('option').each(function(){
		
		var $thisOption = $(this),
				selectedClass = "";

		if($thisOption.is(":selected")) {
			selectedClass = "is-selected";
			$currentValue.text($thisOption.text());
		}

		$dropDownContainer.append($("<li>")
																	.text($thisOption.text())
																	.addClass(selectedClass)
																	.on("click", function(){
																		$thisSelectBox.find("option").removeAttr("selected");
																		$thisOption.attr("selected", "selected");
																		$currentValue.text($thisOption.text());
																		$dropDownContainer.toggle();
																	})
														);
	});

	$currentValue.on("click", function(){
		$dropDownContainer.toggle();
	});

	$thisSelectBox.parent("div").append($currentValue)
															.append($dropDownContainer);
}