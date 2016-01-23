$(function () {
    function c() {
        $("#profile a").parent().parent().addClass("profileactive");
        $("#fullscreen").css("display", "block").animate({
            opacity: 0.5
        }, 200);
        $("#profileview").slideDown(550, function () {
            $(this).find(".closeprofile").fadeIn(200)
        });
        $("#header").animate({
            marginTop: "200px"
        }, 550)
    }
    function f(a) {
        if (a < 1) a = i;
        else if (a > i) a = 1;
        $("#focusarea").find("li:visible").fadeOut("slow").end().find("li:nth-child(" + a + ")").fadeIn("slow");
        $markers.find("a.active").removeClass("active").end().find("li:nth-child(" + a + ") a").addClass("active")
    }
    $("#fullscreen").css("opacity", 0);
    $("#profile a").click(function (a) {
        a.preventDefault();
        c()
    });
    $("#sprofile").click(function (a) {
        a.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 550);
        c()
    });
    $("#fullscreen, #profileview .closeprofile").click(function (a) {
        a.preventDefault();
        $("#menu").removeClass("profileactive");
        $("#fullscreen").delay(200).fadeOut("slow");
        $("#profileview").slideUp(550).find(".closeprofile").fadeOut(200);
    });
});
