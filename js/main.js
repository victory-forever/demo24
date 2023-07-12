
// Counterup2 module

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.counterUp=t():e.counterUp=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n,divideNumbers:()=>r});const n=(e,t={})=>{const{action:n="start",duration:i=1e3,delay:u=16}=t;if("stop"===n)return void o(e);if(o(e),!/[0-9]/.test(e.innerHTML))return;const l=r(e.innerHTML,{duration:i||e.getAttribute("data-duration"),delay:u||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=l[0]||"&nbsp;",e.style.visibility="visible";const c=function(){e.innerHTML=l.shift()||"&nbsp;",l.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(c,u)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(c,u)},o=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},r=(e,t={})=>{const{duration:n=1e3,delay:o=16}=t,r=n/o,i=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),u=[];for(let e=0;e<r;e++)u.push("");for(let e=0;e<i.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(i[e])&&!/<[^>]+>/.test(i[e])){let t=i[e];const n=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let o=u.length-1;for(let e=r;e>=1;e--){let i=parseInt(t/r*e,10);i=n.reduce(((e,{char:t,i:n})=>e.length<=n?e:e.slice(0,-n)+t+e.slice(-n)),i.toString()),u[o--]+=i}}else for(let t=0;t<r;t++)u[t]+=i[e];return u[u.length]=e.toString(),u};return t})()}));


// wow.min.js

(function(){var t,e,i=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in t)n=t[i],null!=n&&(e[i]=n);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),e=this.WeakMap||(e=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,o,r;for(r=this.keys,e=n=0,o=r.length;o>n;e=++n)if(i=r[e],i===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,o,r,s;for(s=this.keys,i=o=0,r=s.length;r>o;i=++o)if(n=s[i],n===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),this.WOW=function(){function n(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new e}return n.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},n.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},n.prototype.start=function(){var t,e,i,n;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(n=this.boxes,e=0,i=n.length;i>e;e++)t=n[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},n.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},n.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},n.prototype.applyStyle=function(t,e){var i,n,o;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,n,i,o)}}(this))},n.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),n.prototype.resetStyle=function(){var t,e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},n.prototype.customStyle=function(t,e,i,n,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},n.prototype.vendors=["moz","webkit"],n.prototype.vendorSet=function(t,e){var i,n,o,r;r=[];for(i in e)n=e[i],t[""+i]=n,r.push(function(){var e,r,s,a;for(s=this.vendors,a=[],e=0,r=s.length;r>e;e++)o=s[e],a.push(t[""+o+i.charAt(0).toUpperCase()+i.substr(1)]=n);return a}.call(this));return r},n.prototype.vendorCSS=function(t,e){var i,n,o,r,s,a;for(n=window.getComputedStyle(t),i=n.getPropertyCSSValue(e),a=this.vendors,r=0,s=a.length;s>r;r++)o=a[r],i=i||n.getPropertyCSSValue("-"+o+"-"+e);return i},n.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},n.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},n.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length)?this.stop():void 0},n.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},n.prototype.isVisible=function(t){var e,i,n,o,r;return i=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+this.element.clientHeight-i,n=this.offsetTop(t),e=n+t.clientHeight,o>=n&&e>=r},n.prototype.util=function(){return this._util||(this._util=new t)},n.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},n}()}).call(this);




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



	// Counter-up2


	const counterUp = window.counterUp.default

	const callback = entries => {
		entries.forEach( entry => {
			const el = entry.target
			if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
				counterUp( el, {
					duration: 1000,
					delay: 16,
				} )
				el.classList.add( 'is-visible' )
			}
		} )
	}

	const IO = new IntersectionObserver( callback, { threshold: 1 } )

	const els = document.querySelectorAll( '.counter' );
	els.forEach((el)=>{IO.observe( el )});




	// Reveal animation

	wow = new WOW(
	  {
		mobile: false      	
	  }
	)
	wow.init();


	// more screens btn


	$( "#more-screens-btn" ).on( "click", function() {
	  $( ".more-screens" ).slideDown( "900" );
	  $('#more-screens-btn').toggleClass('disable-btn');   
	});


	$( "#close-screens" ).on( "click", function() {
	  $( ".more-screens" ).slideUp( "600" );
	  $('#more-screens-btn').toggleClass('disable-btn'); 
	});

	$("a.scrolltoscreen").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
        return false;
    });









})





















