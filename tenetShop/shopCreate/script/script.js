/*Avatar swap opacity changer*/
$(".tenet-shop-avatar-upload").mouseover(function() {
    $(".tenet-shop-avatar-upload").addClass("fa-swap-opacity");
});
$(".tenet-shop-avatar-upload").mouseout(function() {
    $(".tenet-shop-avatar-upload").removeClass("fa-swap-opacity");
});


function encodeImageFileAsURL(element) {

    var input = document.getElementById("tenet-input-upload-avatar");
    var file = input.files;
    var fd = new FormData();

    for (var i = 0; i != file.length; i++) {
        fd.append("avatar", file[i], "shop");
    }

    $.ajax({
        url: "https://localhost:44377/api/Promotion/getavatar?userType=shop",
        type: 'POST',
        data: fd,
        success: function(data) {},
        cache: false,
        processData: false,
        contentType: false

    });

}