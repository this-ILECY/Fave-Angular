var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


$(document).ready(function() {
    /*Report swap opacity changer*/
    $(".tenet-nav-report-hover").mouseover(function() {
        $(".tenet-nav-pie").addClass("fa-swap-opacity");
    });
    $(".tenet-nav-report-hover").mouseout(function() {
        $(".tenet-nav-pie").removeClass("fa-swap-opacity");
    });
    /*promotion swap opacity changer*/
    $(".tenet-nav-promotion-hover").mouseover(function() {
        $(".tenet-nav-promotion").removeClass("fa-swap-opacity");
    });
    $(".tenet-nav-promotion-hover").mouseout(function() {
        $(".tenet-nav-promotion").addClass("fa-swap-opacity");
    });
    /*logout swap opacity changer*/
    $(".tenet-nav-downitem").mouseover(function() {
        $(".tenet-nav-logout").removeClass("fa-swap-opacity");
    });
    $(".tenet-nav-downitem").mouseout(function() {
        $(".tenet-nav-logout").addClass("fa-swap-opacity");
    });
    /*Shop swap opacity changer*/
    $(".tenet-nav-shop-hover").mouseover(function() {
        $(".tenet-nav-shop").removeClass("fa-swap-opacity");
    });
    $(".tenet-nav-shop-hover").mouseout(function() {
        $(".tenet-nav-shop").addClass("fa-swap-opacity");
    });
});



$(function() {
    $("#im").load("../shopCreate/index.html");
});