$(document).ready(()=> {

$(".Home-navbar__menu li a").click(function (e) {
    $('.Home-navbar__menu li a').removeClass('active');
    $(this).addClass('active');

    e.preventDefault();
});
});
