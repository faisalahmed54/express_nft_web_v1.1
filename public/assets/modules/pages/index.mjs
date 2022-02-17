console.log("Hello Home", $("#gameplay"));

function click_events() {

   $("#light_btn").trigger('click');

    $('#gameplay').click(function () {
        $('html, body').animate({
            scrollTop: $("#live_auctions").offset().top
        }, 1000)
    });
    $('#roadmap').click(function () {
        $('html, body').animate({
            scrollTop: $("#top_sellers").offset().top
        }, 1000)
    });
    $('#marketplace').click(function () {
        $('html, body').animate({
            scrollTop: $("#today_pick").offset().top
        }, 1000)
    });
    $('#tokenomics').click(function () {
        $('html, body').animate({
            scrollTop: $("#popular_collection").offset().top
        }, 1000)
    });
    $('#team').click(function () {
        $('html, body').animate({
            scrollTop: $("#create_and_sell").offset().top
        }, 1000)
    });
}

click_events();