/*
/*  Why T-Mobile JS
*/

var Clover = Clover || {};
Clover.whytmo = Clover.whytmo || {};
Clover.whytmo = (function($) {

    // global vars in Clover.whytmo
    var magentaSections,
        rules,
        nav,
        windowHeight,
        windowWidth,
        triangle,
        scrollPos = 0,
        lastScrollPos = 0,
        activeSection,
        topLevelSections,
        sectionPositions = [];

    function init() {
        // init DOM access vars
        nav = $('nav.anchoring');
        rules = $('.rule');
        triangle = $('nav.anchoring .triangle');
        magentaSections = $('.hero, .answer, .animation');
        topLevelSections = $('.container-main section');

        if ($('html').hasClass('no-touch')) {
            // init event handlers
            $(window).on('scroll.whytmo', scrollEvents);
            $(window).on('resize.whytmo', resizeEvents);
            $(window).on('keydown keypress', registerKeyEvents);
            $('.responsive-image').on('click', checkClickThrough);
            $('.scroll-down').on('click', scrollToNextSection);
            $('nav.anchoring').on('click', '>a', navClick);

            // init first state of elements
            $(window).trigger('resize');
            updateActiveSection();
        }
        initAccolades();
    }

    function scrollEvents(e) {
        scrollPos = $(window).scrollTop();
        updateActiveSection();
        subNavAnchoring();
        parallaxScroll();
        if ($(topLevelSections[activeSection]).hasClass('animation')) {
            applyAnimation(topLevelSections[activeSection]); }
    }

    function resizeEvents(e) {
        windowHeight = $(window).height();
        windowWidth = $(window).width();
        updateAccoladePositions();
        updateSectionSizing();
        updateSectionPositions();
        parallaxScroll();
        placeNavTriangle();
    }

    function registerKeyEvents(e) {
        if (e.keyCode===40) {
            e.preventDefault();
            scrollToNextSection(e);
        }
        if (e.charCode === 32 && $('input:focus').length === 0) {
            e.preventDefault();
            scrollToNextSection(e);
        }
    }

    function placeNavTriangle() {
        var $ele = nav.find('.active');
        if ($ele.length===0) { return false; }
        var triangleOffset = $ele.offset().left + parseInt($ele.css('paddingLeft'), 10) - 7;
        triangle.css('left', triangleOffset+'px');
    }

    function dotNavEvent(e) {
        var dot = $(e.target);
        var index = parseInt(dot.attr('class'));
        var banner = $('.accolades .carousel-inside').first();
        var slides = $('.accolades div.slide');
        var slide = slides.first();
        var dotNav = dot.parent();

        dotNav.children().each (function (ind, ele) {
            $(ele).css('background', '#fff');
        });
        dotNav.find('.'+index).css('background', '#e20074');

        banner.css('left', -index*slide.width());
        return false;
    }

    function updateAccoladePositions() {
        var dotNav = $('.accolades .dot-nav');
        var slides = $('.accolades div.slide');
        var banner = $('.accolades .carousel-inside').first();
        var carousel = $('.accolades .carousel');
        var dotNavHeight = 0;
        banner.css('left', 0);

        banner.children().each (function (ind, ele) {
            $(ele).css('width', carousel.width());

            //height for the dots-nav
            if ($(ele).height() > dotNavHeight) dotNavHeight =  $(ele).height();
        });

        banner.css('height', (dotNavHeight + 50));

        dotNav.children().each (function (ind, ele) {
            $(ele).css('background', '#fff');
        });
        dotNav.find('.0').css('background', '#e20074');
    }

    function carouselButtonEvent(e) {
        var button = $(e.target);
        var slides = $('.accolades div.slide');
        var slide = slides.first();
        var banner = $('.accolades .carousel-inside').first();
        var left = parseInt(banner.css('left'));
        var dotNav = $('.accolades .dot-nav');
        var offset = 0;

        //get the direction.
        if (button.hasClass('slide-dir-next')) { offset = -1; }
        if (button.hasClass('slide-dir-prev')) { offset = 1; }

        //validates that complete the cycle.
        if ((left+offset*slide.width()) % slide.width() != 0) { return false }

        var index = Math.abs(left+offset*slide.width()) / slide.width();
        //validates if the slide can do the action
        if (offset == -1 && slides.size() <= index) {
            dotNav.children().first().trigger('click');
            return false;
        }
        if (offset == 1 && left >= 0) {
            dotNav.children().last().trigger('click');
            return false;
        }

        //dotNav behavior
        dotNav.find('.'+(index+offset)).css('background', '#fff');
        dotNav.find('.'+index).css('background', '#e20074');

        banner.css('left', left+offset*slide.width());
        return false;
    }

    function navClick(e) {
        e.preventDefault();
        var sectionID = $(e.currentTarget).attr('href'),
            section = $(sectionID);
        if (section.length) {
            var sectionOffset = section.offset().top;
            $('html, body').animate({
                'scrollTop': sectionOffset
            }, 1000);
        }
    }

    function updateActiveNavItem(activeEle) {
        var activeClass = /rule-\d/.exec($(activeEle).attr('class'));
        if (activeClass===null) { return false; }
        nav.find('a').removeClass('active');
        nav.find('a.'+activeClass[0]).addClass('active');
        placeNavTriangle();
    }

    function scrollToNextSection(e) {
        var scrollTarget = topLevelSections[activeSection+1],
            animationTime = 1000;
        if (!scrollTarget) { return false; }
        if ($(scrollTarget).hasClass('animation')) {
            scrollTarget = topLevelSections[activeSection+2];
            animationTime = 3000;
        }
        scrollToSection(scrollTarget, animationTime);
    }

    function checkClickThrough(e) {
        var clickX = e.pageX,
            clickY = e.pageY,
            button = $(e.target).parents('section').find('.scroll-down');
            buttonX = button.offset().left,
            buttonY = button.offset().top;
        if (clickX > buttonX && clickY > buttonY && clickX < buttonX + button.width() && clickY < buttonY + button.height()) {
            scrollToNextSection(e);
        }
    }

    function scrollToSection(section, scrollTime) {
        var scrollTargetOffset = $(section).offset().top;
        $('html, body').animate({
            'scrollTop': scrollTargetOffset
        }, scrollTime);
    }

    function updateSectionSizing() {
        magentaSections.add('section.accolades').each(function(ind, ele) {
            if ($(ele).hasClass('animation')) {
                var multiplier = $(ele).find('.panels').text();
                $(ele).height(windowHeight*multiplier);
                return;
            }
            var row = $(ele).find('.row-fluid > div').css({
                    'height': 'auto',
                    'padding-top': '0' }),
                contentHeight = $(ele).height(),
                offset = (windowHeight - contentHeight) / 2 - 5;
            row.height(windowHeight);
            if (offset < 10) {
                row.height(contentHeight + 150);
                row.css({
                    'paddingTop': '125px'
                });
            } else {
                row.css({
                    'paddingTop': offset
                });
            }
        });
        $(window).trigger('scroll.subnav');
    }

    function updateSectionPositions() {
        topLevelSections.each(function(ind, ele) {
            if ($(ele).hasClass('nav-container')) { return; }
            var eleOffset = $(ele).offset().top + $(ele).height()*0.8;
            $(ele).data('position', eleOffset);
        });
    }

    function updateActiveSection() {
        topLevelSections.each(function(ind, ele) {
            var elePos = $(ele).data('position');
            if (scrollPos <= elePos) {
                if (activeSection !== ind) {
                    activeSection = ind;
                    updateActiveNavItem(ele);
                }
                return false;
            }
        });
    }

    function applyAnimation(ele) {
        var panelNum = $(ele).find('.panels').text(),
            scrollDiff = scrollPos - $(ele).offset().top,
            scrollDiffBottom = scrollPos + windowHeight - $(ele).height() - $(ele).offset().top,
            stepNum = Math.floor(scrollDiff / windowHeight*2) + 1,
            offset = scrollDiff * 1.2,
            removeClasses = '';
            addClasses = '';
        // add step-# classes
        for (var i=1; i<=panelNum; i++) {
            if (i<=stepNum) {
                addClasses += 'step-'+i+' ';
            } else {
                removeClasses += 'step-'+i+' ';
            }
        }
        $(ele).addClass(addClasses);
        $(ele).removeClass(removeClasses);
        // animation specific behaviors
        if (scrollDiffBottom < 20 && 0 < scrollDiff && $(ele).hasClass('rule-2')) {
            $(ele).find('.world').css('-webkit-clip-path', 'circle(175px,220px,' + scrollDiff*1.4 + 'px');
            $(ele).find('figure').css('transform', 'translate3d(0,' + scrollDiff*1.01 + 'px,0)');
        } else if (scrollDiffBottom < 0 && 0 < scrollDiff) {
            $(ele).find('figure').css('transform', 'translate3d(0,' + scrollDiff*1.2 + 'px,0)');
        }
    }

    function subNavAnchoring() {
        var mainNav = $('.navbar-main');
        if (mainNav.length===0) { return false; }
        var mainNavOffset = mainNav.offset().top,
            mainNavHeight = mainNav.height(),
            subNavOffset = $('.nav-container').offset().top;
        if (scrollPos < lastScrollPos) {
            // scrolling up
            if (scrollPos < subNavOffset - mainNavHeight) {
                nav.removeClass('fixedToTop fixedToPage fixedToMainNav')
                    .css('top', '');
            } else if (mainNavOffset - scrollPos >= -5) {
                nav.removeClass('fixedToTop fixedToPage')
                    .css('top', '')
                    .addClass('fixedToMainNav');
            } else if (!nav.hasClass('fixedToPage')) {
                nav.addClass('fixedToPage')
                    .css('top', scrollPos);
            }
        } else {
            // scrolling down
            if (scrollPos < subNavOffset) {
                nav.removeClass('fixedToTop fixedToPage fixedToMainNav')
                    .css('top', '');
            } else if (mainNavOffset - scrollPos <= 5 - mainNavHeight) {
                nav.removeClass('fixedToMainNav fixedToPage')
                    .css('top', '')
                    .addClass('fixedToTop');
            } else if (!nav.hasClass('fixedToPage')) {
                nav.addClass('fixedToPage')
                    .css('top', scrollPos + mainNavHeight);
            }
        }
        lastScrollPos = scrollPos;
    }

    function parallaxScroll() {
        rules.each(function(ind, ele) {
            var elePos = $(ele).offset().top,
                eleHeight = $(ele).height(),
                scrollOffset = scrollPos - elePos,
                imageOffset = -(scrollOffset - eleHeight)/7,
                textOffset = 2 * scrollOffset;
            // ele is too far up page
            if (scrollOffset <= -eleHeight) { return; }
            // ele is too far down page
            if (scrollOffset >= eleHeight) { return; }
            $(ele).find('.responsive-image').css('transform', 'translate3d(0,' + imageOffset + 'px,0)');
            $(ele).find('.responsive-text').css('transform', 'translate3d(0,' + textOffset + 'px,0)');
        });
    }

    function initAccolades() {
        var accoladesSection = $('.accolades'),
            accoladesSlides = accoladesSection.find('.slide'),
            carouselSection = accoladesSection.find('.carousel'),
            prevButton = $('<a>', {
                'class': 'slide-dir slide-dir-prev',
                'href': '#'
            }),
            nextButton = $('<a>', {
                'class': 'slide-dir slide-dir-next',
                'href': '#'
            }),
            dotNavContainer = $('<nav>', {
                'class': 'dot-nav'
            });
        // add next/prev nav buttons
        accoladesSection.append(prevButton, nextButton);
        // add dot nav
        accoladesSlides.each(function(ind, ele) {
            var dot = $('<a>', {
                'class': ind,
                'href': '#'
            });
            dotNavContainer.append(dot);
            dot.on('click', dotNavEvent);
        });
        carouselSection.append(dotNavContainer);

        //assign the event for the buttons
        nextButton.on('click', carouselButtonEvent);
        prevButton.on('click', carouselButtonEvent);

        //if there are only one slide don't show the arrows.
        var hideClass = "hide";
        if (accoladesSlides.size() <= 1) {
            $('.accolades .slide-dir-next').addClass(hideClass);
            $('.accolades .slide-dir-prev').addClass(hideClass);
        }

        //hides the dots if there are only one slide.
        if (accoladesSlides.size() < 2) dotNavContainer.hide();
    }

    // revealing module for pulic interfaces
    return {
        'initialize': init
    };
})(jQuery);

$(document).ready(Clover.whytmo.initialize);
