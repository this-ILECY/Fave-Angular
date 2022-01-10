let avatar_heigth_calc = document.getElementById("tenet-shop-profile-id")
avatar_heigth_calc.height = avatar_heigth_calc.offsetWidth

let ShopID = "1";
let urlGetavatar = "https://localhost:44377/api/Blob/getavatar"
let urlUpdateShop = "https://localhost:44377/api/Shop/UpdateShop"
let urlShopByID = "https://localhost:44377/api/Shop/ShopByID?ShopID=" + ShopID
let avatarAddress;
let shopJSON = JSON.stringify({
    "isDeleted": true,
    "createdDate": "2018-08-01T20:09:52.044Z",
    "shopID": 36496175,
    "userID": 1178341,
    "shopCategoryID": -34244425,
    "shopName": "qui commodo dolore",
    "shopAvatar": avatarAddress,
    "shopAddress": "do enim aute dolor sunt",
    "telePhone": "commodo nisi cillum adipisicing eu",
    "cellPhone": "dolor in",
    "shopLatitude": 12255497.511385724,
    "shopLongitude": 53452548.82597995,
    "isActive": false
});
/*Avatar swap opacity changer*/
$(".tenet-shop-avatar-add").mouseover(function() {
    $(".tenet-shop-avatar-add").addClass("fa-swap-opacity");
});
$(".tenet-shop-avatar-add").mouseout(function() {
    $(".tenet-shop-avatar-add").removeClass("fa-swap-opacity");
});
/*Avatar done swap opacity changer*/
$(".tenet-shop-avatar-add-done").mouseover(function() {
    $(".tenet-shop-avatar-add-done").addClass("fa-swap-opacity");
});
$(".tenet-shop-avatar-add-done").mouseout(function() {
    $(".tenet-shop-avatar-add-done").removeClass("fa-swap-opacity");
});





function avatarChange(avatar) {

    send_avatar(avatar);
    avatar_upload_done();
}
let avatar_upload_done = () => {
    $(".tenet-shop-avatar-upload").addClass("tenet-shop-avatar-upload-done-radius")
    $(".tenet-shop-avatar-add-done").addClass("tenet-shop-avatar-add-done-dis")
}
let send_avatar = (element) => {

    var input = document.getElementById("tenet-input-upload-avatar");
    var file = input.files;
    var fd = new FormData();

    for (var i = 0; i != file.length; i++) {
        fd.append("avatar", file[i], "shop");
    }

    $.ajax({
        url: urlGetavatar,
        type: 'POST',
        data: fd,
        success: function(data) {
            avatarAddress = data;
            $("#tenet-shop-profile-id").attr("src", data)
        },
        cache: false,
        processData: false,
        contentType: false

    });



}



$(".tenet-shop-avatar-add-done").click(() => {
    get_shop_by_id();
});
let get_shop_by_id = () => {
    var setting = {
        "url": urlShopByID,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(setting).done(function(response) {
        shopJSON = response;
        shopJSON.ShopAvatar = avatarAddress.substring(avatarAddress.indexOf("\\shop\\"));
        update_shop();
    });
}
let update_shop = () => {

    var settings = {
        "url": urlUpdateShop,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(shopJSON),
    };

    $.ajax(settings).done(function(response) {
        //location.reload()
    });
}