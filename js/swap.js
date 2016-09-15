$(document).ready(function(){


	$(document).on('scroll', function(){

		// get places and positions 
		var scrollTop = $('body').scrollTop();
		var windowHeight = $(window).height();
		var scrollHeight = $('body').prop('scrollHeight');

		// map scroll over window 
		var scroller = windowHeight * scrollTop / (scrollHeight - windowHeight);
		// var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

		// define 'zone'
		var zone = $('.zone');
			zone.css({
				"top": scroller,
				"left": 0,
				"height": "1px"
		});

		

		$('.projects img').each(function(){


		var topProject = $('.projects .row:nth-child(1)').offset().top - $(window).scrollTop();;

		if(scroller < topProject){
			$('.titles').hide();
			$('.titlebar').hide();
		} else {
			$('.titles').show();
			$('.titlebar').show();
		}

			// position stuff
			var offsetY = $(this).offset().top;
			var offsetX = $(this).offset().left;
			var scroll =  $(window).scrollTop();
			var posY = offsetY - scroll;
			var posX = offsetX;

			var titlescroller = scroller + $(this).height() + 10;

			// detect right position 
			if ( posY < scroller ){

	
				// get attributes for current image 
				var id = $(this).attr('id');
				
				var projectTitle = $(this).attr('data-title');
				var projectMedium = $(this).attr('data-medium');
				var projectLink = $(this).attr('data-link');

				// set position of titles
				$('.titles').css({
					"top": scroller,
					"left": posX
				});

				if( posX < 400 ){
					// console.log('left');
					$('.titlebar').css({
						"top": scroller,
						"right" : "",
						"left": posX + $(this).width() + 15
					});

					$('#title').css({
						"text-align" : "left",
						"float" : 'left'
					});

					$('#medium').css({
						"text-align" : "left",
						"float" : 'left'
					});					

				} else if ( posX > 400 ){
					$('.titlebar').css({
						"top": scroller,
						"left" : "",
						"right": $(window).width() - posX + 15
					});

					$('#title').css({
						"text-align" : "right",
						"float" : 'right'
					});

					$('#medium').css({
						"text-align" : "right",
						"float" : 'right'
					});
				}

				// set title attributes
				$('.titlebar #title').text(projectTitle);
				$('.titlebar #medium').text(projectMedium);

				// set link again for images
				$(this).attr( 'data-link' , projectLink );

				if(
					id == 'architec' ||
					id == 'actions' ||
					id == 'photobooth' ||
					id == 'backgrounds' ||
					id == 'booksladders' ||
					id == 'waiting' ||
					id == 'serendipity' ||
					id == 'yami' ||
					id == 'ppp' ||
					id == 'routinier' ||
					id == 'following' 
				){
					$(this).attr({
						'src': '../projects/' + id +'/thumb2.png',
					});	
				} else if (
					id == 'ascloseto' ||
					id == 'bp27' ||
					id == 'bp26' ||
					id == 'bp25' ||
					id == 'bp24' ||
					id == 'bp21' ||
					id == 'bp18' ||
					id == 'bp15' ||
					id == 'bp12' ||
					id == 'bp5' ||
					id == 'pms' ||
					id == 'password' ||
					id == 'gradients' ||
					id == 'stands' ||
					id == 'magical' ||
					id == 'strobe' 
				){
					$(this).attr({
						'src': '../projects/' + id +'/thumb2.gif',
					});	
				} 
			} 
		});

	});

	$(window).resize(function(){
		$('.titles').hide();
		$('.titlebar').hide();
	});

});

