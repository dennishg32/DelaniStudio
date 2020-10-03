$(document).ready(function() {
    $("#design-toggle").click(function() {
        $("#p1").toggle();
        $("#img1").toggle();
    });

    $("#dev-toggle").click(function() {
        $("#p2").toggle();
        $("#img2").toggle();
    });
    $("#pro-toggle").click(function() {
        $("#p3").toggle();
        $("#img3").toggle();
    });
});