$(document).ready(function() {
	
	$(".button").on("click", function () {
		var position = 0;
		
		function gnomeSort() {
			if (position < $(".team").length) {
				setTimeout(gnomeSort, 250);
				$($(".team")[position]).addClass("highlight");
				if (position == 0 || $($(".team")[position - 1]).attr("class") <= $($(".team")[position]).attr("class")) {
					position++;
					$($(".team")[position]).addClass("highlight");
					$($(".team")[position - 1]).removeClass("highlight");
			} else {
				$($(".team")[position]).insertBefore($($(".team")[position - 1]));
				position--;
				$($(".team")[position + 1]).removeClass("highlight");
			}
		};
	};
	gnomeSort();
	});
});



