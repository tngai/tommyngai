
(function($){
  $(function(){
 	var viewButton = document.getElementById('download-button');
 	var viewSwitcher = function(event){
 		var buttonText = $('#download-button').text().split('swap')[0];
 		if(buttonText === 'About') {
 			$('#download-button').empty().append("Recent Projects<i class='material-icons right'>swap_horiz</i>");
			$('#about').hide();
			$('#portfolio').addClass('animated fadeInRightBig').removeClass('hide').show();
 		}
 		if(buttonText === 'Recent Projects') {
 			$('#download-button').empty().append("About<i class='material-icons right'>swap_horiz</i>");
 			$('#portfolio').hide().removeClass('animated fadeInRightBig');
 			$('#about').removeClass('hide').show().addClass('animated fadeInLeftBig');	
 		}
 	};
 	viewButton.addEventListener('click',viewSwitcher);  
    $('.parallax').parallax();
    $(".element").typed({
        strings: ["Welcome !!!"],
        typeSpeed: 100,
        showCursor: false
    });
	

  }); // end of document ready
})($); // end of jQuery name space