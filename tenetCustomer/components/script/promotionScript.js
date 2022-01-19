let promotions;
let promotion_url = "https://localhost:44377/api/Promotion/PromotionAll"



$(document).ready(() => {
    pro_modal_hover();
    $(".tenet-pro-card-title").attr('id', "hi")
    promotion_all(promotion_url);
    console.log(promotions);
});

/*every modal has three icons from font awesome.
this is the hover effect function */
var pro_modal_hover = async() => {
    /*cart swap opacity changer*/
    $(".tenet-pro-modal-report").mouseover(function() {
        $(".tenet-pro-modal-report").addClass("fa-swap-opacity");
    });
    $(".tenet-pro-modal-report").mouseout(function() {
        $(".tenet-pro-modal-report").removeClass("fa-swap-opacity");
    });
    /*promotion swap opacity changer*/
    $(".tenet-pro-modal-wishlist").mouseover(function() {
        $(".tenet-pro-modal-wishlist").addClass("fa-swap-opacity");
    });
    $(".tenet-pro-modal-wishlist").mouseout(function() {
        $(".tenet-pro-modal-wishlist").removeClass("fa-swap-opacity");
    });
    /*logout swap opacity changer*/
    $(".tenet-pro-modal-cart").mouseover(function() {
        $(".tenet-pro-modal-cart").addClass("fa-swap-opacity");
    });
    $(".tenet-pro-modal-cart").mouseout(function() {
        $(".tenet-pro-modal-cart").removeClass("fa-swap-opacity");
    });
}
var promotion_all = async(the_url) => {
    $.get({
        url: the_url,
        success: function(response) {
            promotions = response;
        }
    })
}

$(".tenet-pro-card-full").click(function() {

})