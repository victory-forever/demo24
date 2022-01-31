$(document).ready(function(){
    
    var activeSlide = 1;
    function slideChange(num){
    	activeSlide = num;
		$("#sliderBlock .nav-item").removeClass("active");
		$("#sliderBlock .nav-item.item"+num).addClass("active");
		$("#sliderBlock .slider-item").hide();
		$("#sliderItem"+num).fadeIn(200);
		clearInterval(sliderChange);
		sliderChanging();
    }

   	$("#sliderBlock .nav-item").on("click", function(){
   		if ($(this).hasClass("active")) {
   			return false;
   		}
   		var blockID = $(this).attr("data-num");
   		slideChange(blockID);
		return false;
   	})

   	var sliderChange;
   	function sliderChanging(){
	   	sliderChange = setInterval(function() { 
	   		activeSlide++;
	   		if (activeSlide > 5) { 
	   			activeSlide = 1;
	   		}
	   		slideChange(activeSlide);
	   	}, 7000)
   	}
   	sliderChanging();

/*	$("#sliderBlock .slider_nav").mouseout(function(){
		sliderChanging();
	});
	$("#sliderBlock .slider_nav").mouseover(function(){
		clearInterval(sliderChange);
	});*/
	

	function overlayActions(){
		this.overlayOpen = function(name){
			$(".overlay_container").fadeIn();
			$(".overlay_wrap").hide();
			$("#"+name).fadeIn(250);
			$("#overlayFog").fadeIn(250);
		}
		this.overlayHide = function(){
			$(".overlay_container").fadeOut(250);
			$(".overlay_wrap").fadeOut(250);
			$("#overlayFog").fadeOut(250);
		}		
	}
	olAction = new overlayActions();

	$(".overlayOpen").on("click", function(){
		var olID = $(this).attr("data-overlay");
		olAction.overlayOpen(olID);
		return false;
	})
	$(".overlay_close, .btn-close").on("click", function(){
		olAction.overlayHide();
		return false;
	})
	$("#overlayFog").on("click", function(){
		olAction.overlayHide();
		return false;
	})



	$("a.scrollto").click(function () {
    var elementClick = '#'+$(this).attr("href").split("#")[1]
    var destination = $(elementClick).offset().top-100;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 900);
    return false;
	});




})