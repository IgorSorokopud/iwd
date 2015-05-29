$j(document).ready(function () {
    $j('.home-slideshow-container')
        .cycle({
            speed: 600,
            pauseOnHover: true,
            swipe: true,
            prev: '.home-slideshow-prev',
            next: '.home-slideshow-next',
            fx: 'scrollHorz',
            paused: 'false'
        });

    $j('.sidebar-left-img-top')
        .cycle({
            speed: 600,
            pauseOnHover: true,
            swipe: true,
            prev: '.content-slideshow-prev',
            next: '.content-slideshow-next',
            fx: 'scrollHorz',
            paused: 'false'
        });
});