function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

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
    $("form#fills").submit(function(event) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var msg = $("textarea#message").val();

        if (name != "" && email != "" && msg != "") {
            alert(
                name +
                ", We have recieved your feedback. Thank you for your support and reach to us, it means a lot"
            );
        } else if (!isEmail(email)) {
            alert("incomplete, try again please");
        } else {
            alert("invalid input");
        }
        event.preventDefault();
    });
});