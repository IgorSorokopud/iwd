$j(document).ready(function () {

    $j('.nav-primary .nav-5').on('click', function () {
        event.preventDefault();
        $j('.nav-primary').toggleClass('show-more-nav');
    });

    <!--    Button Menu    -->

    $j('.skip-nav').on('click', function () {
        $j('.header-language-background').toggleClass('show-mini-nav');
        $j('.nav-primary .nav-5').toggleClass('hide-button-more');
    });
});
