var Clover=Clover||{};Clover.home=Clover.home||{};Clover.home.carousel={};(function($){$(function(){$(".marquee-slide").homeDisplay({fixedHeight:false,displayNavigation:false})})})(window.jQuery);(function($){$(function(){Clover.home.carousel.parentWidth=$("#home-featured").width()-4;Clover.home.carousel.itemWidth=0;Clover.home.carousel.navDotsContainer="#home-featured ol.flex-control-nav";Clover.home.carousel.navDots="#home-featured ol.flex-control-nav li";Clover.home.carousel.maxNavDots=9;Clover.home.carousel.smallBP=767;Clover.home.carousel.cElements=featuredProductCarouselJson;Clover.home.carousel.aElements=shortAccessoriesCarouselInfo;Clover.home.carousel.afElements={};Clover.home.carousel.fElements={};Clover.home.carousel.getCategoryItems=function(categoryName){$.each(Clover.home.carousel.cElements,function(i,d){if(d.categoryTitle==categoryName){Clover.home.carousel.fElements=d}})};Clover.home.carousel.getAccesoriesCategory=function(categoryName){$.each(Clover.home.carousel.aElements,function(i,d){if(d.categoryTitle==categoryName){Clover.home.carousel.afElements=d}})};Clover.home.carousel.switchCategory=function(categoryName,currentElement){if(currentElement=="featured"){Clover.home.carousel.getCategoryItems(categoryName);var $carouselHtml=$("#home-featured .flexslider");var $newItemList="";var $showAllL=$("#home-featured").find(".abs a.cta");var $legalDisclaimerInfo=$("#home-featured").find(".legal-disclaimer-info");var $legalDisclaimerInfoClone=$legalDisclaimerInfo.clone();$carouselHtml.siblings(".flex-control-nav, .flex-direction-nav").remove();$carouselHtml.remove();$legalDisclaimerInfo.remove();$.each(this.fElements.products,function(j,k){if(k.deviceType=="accessory"){$addToCart='<span class="details"><a class="add-to-cart-link" data-cartitemid="'+k.deviceId+'" data-cartitemname="'+k.manufacturerName+" "+k.deviceName+'" data-cartitemtype="accessory" href="#" alt="Add to Cart"><i class="icon-shopping-cart"></i> Add to Cart</a></span>';$newItemList=$newItemList+'<li class="product-card" data-deviceid="'+k.deviceId+'" data-devicetype="'+k.deviceType+'"><a class="product-name" href="'+k.pageUrl+'"><img class="product-image-device" src="'+k.midsizeImage+'"/>'+k.linkedName+'</a><div class="product-price"><span class="details generic-upfront-price"></span><span id="upfront-text"></span></div><div>'+$addToCart+"</div></li>"}else{$newItemList=$newItemList+'<li class="product-card" data-deviceid="'+k.deviceId+'" data-devicetype="'+k.deviceType+'"><a href="'+k.pageUrl+'"><img class="product-image-device" src="'+k.midsizeImage+'"/></a><a class="product-name" href="'+k.pageUrl+'">'+k.manufacturerName+" "+k.deviceName+'</a><div class="fc-upfront-price-visible"><div class="product-price" data-price-component="'+k.pageUrlForModal+".product_pricing_modal.html?deviceId="+k.deviceId+'"><span class="details generic-upfront-price"></span>&nbsp;<span class="upfront-text"></span></div><i data-price-component="'+k.pageUrlForModal+".product_pricing_modal.html?deviceId="+k.deviceId+'" class="icon-info-sign"></i></div><div class="fc-full-retail-price-visible"><div class="product-price"><span class="details generic-upfront-price"></span>&nbsp;<span class="upfront-text"></span></div></div><div></div></li>'}});$("#home-featured").append('<div class="flexslider clearfix"><ul class="slides">'+$newItemList+"</ul></div>");$showAllL.attr("href",this.fElements.shopAllCategoryURL);Clover.home.carousel.flexsliderInit();$legalDisclaimerInfoClone.find("p").html(this.fElements.legalDisclaimer);$("#home-featured .flexslider").after($legalDisclaimerInfoClone);Clover.AddToCart.init()}else{if(currentElement=="accessories"){this.getAccesoriesCategory(categoryName);var $shortCarouselHtml=$(".short-carousel .flexslider");var $newAccessoryItem="";var $showAllItems=$(".short-carousel .module-info-section").find(".abs a.cta");$shortCarouselHtml.find(".flex-control-nav, .flex-direction-nav").remove();$shortCarouselHtml.remove();$.each(this.afElements.products,function(j,k){$newAccessoryItem=$newAccessoryItem+'<li class="product-card"><a href="'+k.pageUrl+'"><img src="'+k.midsizeImage+'" alt="'+k.manufacturerName+'" /></a><div class="product-info"><span class="details"><a href="'+k.pageUrl+'" class="cta">View Details</a></span></div></li>'});$(".short-carousel-container").append('<div id="home-short-carousel" class="flexslider short-carousel"><ul class="slides">'+$newAccessoryItem+"</ul></div>");$showAllItems.attr("href",this.afElements.shopAllCategoryURL);Clover.home.carousel.flexsliderShortInit()}}};Clover.home.carousel.bind=function(){var $dropdownSelectors=$(".category-selected");$dropdownSelectors.each(function(){$this=$(this);if($this.next().find("li").size()==1){$this.removeAttr("data-toggle").css("cursor","default").find(".caret").remove()}var $categorySelected=$this;var $categorySelectorCaret=$this.find("span.caret").clone();var $featuredCarousel=$(".featured-carousel");var $dropDownItems=$this.parent("div").find(".dropdown-menu");$dropDownItems.find("a:first").addClass("selected");$dropDownItems.find("a").on("click",function(e){e.preventDefault();var categoryName=$(this).data("f-category");var currentElement=$(this).parents("ul").data("c-type");if(categoryName==$categorySelected.text()){return}$(this).parents("ul").find("a").removeClass("selected");$(this).addClass("selected");$categorySelected.text(categoryName).append($categorySelectorCaret);Clover.home.carousel.switchCategory(categoryName,currentElement)})});$(window).resize(function(){if(Clover.home.carousel.parentWidth!==$("#home-featured").width()-4){var isMaxDots=$(Clover.home.carousel.navDots).length>=Clover.home.carousel.maxNavDots;var isSmallBP=$(window).width()<=Clover.home.carousel.smallBP;if(isMaxDots&&isSmallBP){$(Clover.home.carousel.navDotsContainer).addClass("hide")}else{$(Clover.home.carousel.navDotsContainer).removeClass("hide")}}})};Clover.home.carousel.flexsliderInit=function(){var varUseCSS=(isMobile.iOS())?false:true;Clover.home.carousel.itemWidth=flexsliderItemsWidth(Clover.home.carousel.parentWidth);$("#home-featured .flexslider").each(function(){var $this=$(this),parentPillbox=$this.closest(".pillbox");$this.flexslider({animation:"slide",itemWidth:Clover.home.carousel.itemWidth,minItems:1,maxItems:3,useCSS:varUseCSS,slideshow:false,controlsContainer:parentPillbox})});$(window).resize()};Clover.home.carousel.flexsliderShortInit=function(){$("#home-short-carousel").flexslider({animation:"slide",itemWidth:100,controlsContainer:"#home-short-carousel",minItems:1,maxItems:1,useCSS:(isMobile.iOS())?false:true,slideshow:false})};Clover.home.carousel.init=function(){Clover.home.carousel.flexsliderInit();Clover.home.carousel.flexsliderShortInit();Clover.home.carousel.bind()};$(document).ready(function(){Clover.home.carousel.init()})})})(window.jQuery);var Clover=Clover||{};Clover.home=Clover.home||{};Clover.home.coverageForm={};(function($){$(function(){Clover.home.coverageForm.formContainer=$("#coverage-form");Clover.home.coverageForm.inputZip=Clover.home.coverageForm.formContainer.find("input[type='text']");Clover.home.coverageForm.init=function(){Clover.home.coverageForm.checkLocation();Clover.home.coverageForm.bind()};Clover.home.coverageForm.checkLocation=function(){var cookieZIP=Clover.getQuerystringVal($.cookie("TMobileUSStore"),"ZIP");if(cookieZIP){this.inputZip.val(cookieZIP)}};Clover.home.coverageForm.bind=function(){var self=this;self.formContainer.on("submit",function(e){if(!Clover.home.coverageForm.inputZip.val()){e.preventDefault()}})};Clover.home.coverageForm.init()})})(window.jQuery);
