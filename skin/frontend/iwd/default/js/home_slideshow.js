$j(document).ready(function () {

    $j('.home-slideshow-container .home-slideshow')
        .cycle({
            slides: '> li',
            pager: '.home-slideshow-pager',
            pagerTemplate: '<span class="pager-box"></span>',
            speed: 600,
            pauseOnHover: true,
            swipe: true,
            prev: '.home-slideshow-prev',
            next: '.home-slideshow-next',
            fx: 'scrollHorz',
            paused: 'false'
        });
});
