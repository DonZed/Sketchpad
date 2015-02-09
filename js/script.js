

$(document).ready(function() {
	var $grid = $('<div />', {"class": 'grid'});
	for (var i = 0; i < 1024 ; i++) {
		$($grid).clone().appendTo( '#sketchpad' );	
	};
	
	$("#sketchpad div").hover(function() {
		$(this).css("background-color", "white")
	});

	$("#new").on("click", function(){
		var $new_grid = prompt("How many rows?");
		var $new_size = 960 / $new_grid;
		$("#sketchpad").empty();
		$new_grid *= $new_grid;
		for (var i = 0; i < $new_grid ; i++) {
			$($grid).clone().appendTo( '#sketchpad' );	
		};

		$(".grid").css({"width": $new_size,
		 				"height": $new_size
		});
		
		$("#sketchpad div").hover(function() {
			$(this).css("background-color", "white")
		});

	});

	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	}

	$("#random").on("click", function(){
		$("#sketchpad div").hover(function() {
			$(this).css("background-color", getRandomColor)
		});
	});

	$("#clear").click(function(){
		$("#sketchpad div").css("background-color", "black")
		$("#sketchpad div").hover(function() {
			$(this).css("background-color", "white")
		});
	});

});