// console.log("Hello Home", $("#gameplay"));

function click_events() {

   $("#light_btn").trigger('click');

    $('#gameplayMenu').click(function () {
        $('html, body').animate({
            scrollTop: $("#gameplay").offset().top
        }, 1000)
    });
    $('.gameplayMenu').click(function () {
        $('html, body').animate({
            scrollTop: $("#gameplay").offset().top
        }, 1000)
    });
  
    $('#roadmapMenu').click(function () {
        console.log("Hello roadmap")
        $('html, body').animate({
            scrollTop: $("#roadmap").offset().top
        }, 1000)
    });
    $('.roadmapMenu').click(function () {
        console.log("Hello roadmap")
        $('html, body').animate({
            scrollTop: $("#roadmap").offset().top
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
    $('#home').click(function () {
        $('html, body').animate({
            scrollTop: $("#main_section").offset().top
        }, 1000)
    });
    $('.homeMenu').click(function () {
        $('html, body').animate({
            scrollTop: $("#main_section").offset().top
        }, 1000)
    });
}

click_events();