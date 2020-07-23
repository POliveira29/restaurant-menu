/* Navigation Select Menu */
$(".select-nav--primary").click(function() {
    if ($(".select-nav__submenu--primary").hasClass("active")) {
        $(".select-nav__submenu--primary").removeClass("active");
    } else {
        $(".select-nav__submenu--primary").addClass("active");
    }
});

$(".select-nav--secondary").click(function() {
    if ($(".select-nav__submenu--secondary").hasClass("active")) {
        $(".select-nav__submenu--secondary").removeClass("active");
    } else {
        $(".select-nav__submenu--secondary").addClass("active");
    }
});

/* Close Navigation Select Menu */