let avatar_heigth_calc = document.getElementById("tenet-shop-profile-id")
avatar_heigth_calc.height = avatar_heigth_calc.offsetWidth

let ShopID = "1"
let theShopID, theUserID;
let urlGetavatar = "https://localhost:44377/api/Blob/getavatar"
let urlGetbanner = "https://localhost:44377/api/Blob/getbanner"
let urlUpdateShop = "https://localhost:44377/api/Shop/UpdateShop"
let urlShopByID = "https://localhost:44377/api/Shop/ShopByID?ShopID=" + ShopID
let avatarAddress;
let bannerAddress;
/*the shop api base format*/
let shopJSON = {
    "isDeleted": true,
    "createdDate": "2018-08-01T20:09:52.044Z",
    "shopID": 36496175,
    "userID": 3239849238,
    "shopCategoryID": 1234897624387687234,
    "shopName": "qui commodo dolore",
    "shopAvatar": avatarAddress,
    "ShopBanner": bannerAddress,
    "shopAddress": "do enim aute dolor sunt",
    "telePhone": "commodo nisi cillum adipisicing eu",
    "cellPhone": "dolor in",
    "shopLatitude": 12255497.511385724,
    "shopLongitude": 53452548.82597995,
    "isActive": false
};



/****************************************
 * 
 * onreadystate event and filling the whole page
 * 
 * **************************************/
$(document).ready(() => {
    opacity()
    get_and_fill_shop_by_id()
});
/*opens and fills the inputs*/
let get_and_fill_shop_by_id = () => {
    var setting = {
        "url": urlShopByID,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(setting).done(function(response) {

        shopJSON = response;
        $("#tenet-shop-name").val(response.shopName)
        $("#tenet-shop-telephone").val(response.telePhone)
        $("#tenet-shop-cellphone").val(response.cellPhone)
        $("#tenet-shop-address").val(response.shopAddress)
        if (response.shopAvatar.length > 2 || response.shopBanner.length > 2) {
            $("#tenet-shop-profile-id").attr('src', response.shopAvatar)
            $(".tenet-shop-banner-div").css("background-image", "url(" + response.shopBanner.replace(/\\/g, "/") + ")")
        }
    });
}


/****************************************
 * 
 * changing avatar and banner
 * 
 * **************************************/
/*when tenet-input-upload-avatar changes, runs*/
function avatarChange(avatar) {

    prepare_avatar(avatar);
    avatar_upload_done();
}
/*creating the avatar to send */
let prepare_avatar = (element) => {
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
                shopJSON.shopAvatar = data
            },
            cache: false,
            processData: false,
            contentType: false

        });
    }
    /*shows the check mark when upload is done*/
let avatar_upload_done = () => {
    $(".tenet-shop-avatar-upload").addClass("tenet-shop-avatar-upload-done-radius")
    $(".tenet-shop-avatar-add-done").addClass("tenet-display-inline-block")
}

/*when tenet-input-upload-banner changes, runs*/
function bannerChange(banner) {

    prepare_banner(banner);
    banner_upload_done();
}
/*creating the banner to send */
let prepare_banner = (element) => {
        var input = document.getElementById("tenet-input-upload-banner");
        var file = input.files;
        var fd = new FormData();

        for (var i = 0; i != file.length; i++) {
            fd.append("banner", file[i], "shop");
        }
        $.ajax({
            url: urlGetbanner,
            type: 'POST',
            data: fd,
            success: function(data) {
                debugger;
                bannerAddress = data;
                $(".tenet-shop-banner-div").css("background-image", "url(" + data.replace(/\\/g, "/") + ")")
                shopJSON.shopBanner = data
            },
            cache: false,
            processData: false,
            contentType: false

        });
    }
    /*shows the check mark when upload is done*/
let banner_upload_done = () => {
    $(".tenet-shop-banner-upload").addClass("tenet-shop-avatar-upload-done-radius")
    $(".tenet-shop-banner-add-done").addClass("tenet-display-inline-block")
}

/*when you click on done check mark, runs*/
$(".tenet-shop-avatar-add-done , .tenet-shop-banner-add-done").click(() => {
    update_shop();
});



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
        location.reload()
    });
}

/****************************************
 * 
 * font awesome opacity changer
 * 
 * **************************************/
let opacity = () => {
    /*Avatar add swap opacity changer*/
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
    /*banner done swap opacity changer*/
    $(".tenet-shop-banner-add-done").mouseover(function() {
        $(".tenet-shop-banner-add-done").addClass("fa-swap-opacity");
    });
    $(".tenet-shop-banner-add-done").mouseout(function() {
        $(".tenet-shop-banner-add-done").removeClass("fa-swap-opacity");
    });
    /*pencil edit swap opacity changer*/
    $(".tenet-shop-pencil-edit").mouseover(function() {
        $(".tenet-shop-pencil-edit").addClass("fa-swap-opacity");
    });
    $(".tenet-shop-pencil-edit").mouseout(function() {
        $(".tenet-shop-pencil-edit").removeClass("fa-swap-opacity");
    });
    /*cancel swap opacity changer*/
    $(".tenet-shop-info-cancel").mouseover(function() {
        $(".tenet-shop-info-cancel").addClass("fa-swap-opacity");
    });
    $(".tenet-shop-info-cancel").mouseout(function() {
        $(".tenet-shop-info-cancel").removeClass("fa-swap-opacity");
    });
    /*edit done checkmark swap opacity changer*/
    $(".tenet-shop-info-done").mouseover(function() {
        $(".tenet-shop-info-done").addClass("fa-swap-opacity");
    });
    $(".tenet-shop-info-done").mouseout(function() {
        $(".tenet-shop-info-done").removeClass("fa-swap-opacity");
    });
    /*edit done checkmark swap opacity changer*/
    $(".tenet-shop-banner-change").mouseover(function() {
        $(".tenet-shop-banner-change").removeClass("fa-swap-opacity");
    });
    $(".tenet-shop-banner-change").mouseout(function() {
        $(".tenet-shop-banner-change").addClass("fa-swap-opacity");
    });
}


/****************************************
 * 
 * edit main form
 * 
 * **************************************/
$(".tenet-shop-pencil-edit").click(() => {
    /*hide pencil, show cancel and done button */
    $(".tenet-shop-info-done , .tenet-shop-info-cancel").addClass("tenet-display-inline-block");
    $(".tenet-shop-pencil-edit").addClass("tenet-display-none");
    /*editable inputs */
    $("#tenet-shop-name , #tenet-shop-address , #tenet-shop-cellphone , #tenet-shop-telephone").removeAttr("readonly");
    /*add a line to show editability(!) of inputs :\ */
    $("#tenet-shop-name , #tenet-shop-address , #tenet-shop-cellphone , #tenet-shop-telephone").addClass("tenet-editable-input");
});
$(".tenet-shop-info-cancel").click(() => {
    location.reload()
});
$(".tenet-shop-info-done").click((event) => {

    shopJSON.shopName = $("#tenet-shop-name").val()
    shopJSON.telePhone = $("#tenet-shop-telephone").val()
    shopJSON.cellPhone = $("#tenet-shop-cellphone").val()
    shopJSON.shopAddress = $("#tenet-shop-address").val()

    let is_valid = form_validation()
    if (is_valid) {
        update_shop()
    } else {
        event.stopPropagation();
    }


});

let form_validation = () => {
    /*the validation conditions */
    let shopNameBool = shopJSON.shopName.length < 2;
    let shopTeleBool = shopJSON.telePhone.length != 8;
    let shopCellBool = shopJSON.cellPhone.length != 11;
    let shopAddressBool = shopJSON.shopAddress.length < 2;

    /*checking validations and returning boolean value */
    if (shopNameBool || shopTeleBool || shopCellBool || shopAddressBool) {
        debugger;
        if (shopNameBool) {
            $('.tenet-validarion-toast-error-list').empty();
            /*change styles for better experience */
            $("#tenet-shop-name").addClass("tenet-form-border-not-valid")
            $("#tenet-shop-name").removeClass("tenet-form-border-is-valid")
            $("<li class=\"tenet-validation-error\"> نام فروشگاه را به درستی وارد کنید</li>").appendTo('.tenet-validarion-toast-error-list');
        } else {
            $("#tenet-shop-name").addClass("tenet-form-border-is-valid")
            $("#tenet-shop-name").removeClass("tenet-form-border-not-valid")
        }
        if (shopTeleBool) {
            $("#tenet-shop-telephone").addClass("tenet-form-border-not-valid")
            $("#tenet-shop-telephone").removeClass("tenet-form-border-is-valid")
            $("<li class=\"tenet-validation-error\"> شماره تلفن را به درستی وارد کنید</li>").appendTo('.tenet-validarion-toast-error-list');
        } else {
            $("#tenet-shop-telephone").addClass("tenet-form-border-is-valid")
            $("#tenet-shop-telephone").removeClass("tenet-form-border-not-valid")
        }
        if (shopCellBool) {
            $("#tenet-shop-cellphone").addClass("tenet-form-border-not-valid")
            $("#tenet-shop-cellphone").removeClass("tenet-form-border-is-valid")
            $("<li class=\"tenet-validation-error\">  تلفن همراه را به درستی وارد کنید</li>").appendTo('.tenet-validarion-toast-error-list');
        } else {
            $("#tenet-shop-cellphone").addClass("tenet-form-border-is-valid")
            $("#tenet-shop-cellphone").removeClass("tenet-form-border-not-valid")
        }
        if (shopAddressBool) {
            $("#tenet-shop-address").addClass("tenet-form-border-not-valid")
            $("#tenet-shop-address").removeClass("tenet-form-border-is-valid")
            $("<li class=\"tenet-validation-error\"> آدرس را به درستی وارد کنید</li>").appendTo('.tenet-validarion-toast-error-list');
        } else {
            $("#tenet-shop-address").addClass("tenet-form-border-is-valid")
            $("#tenet-shop-address").removeClass("tenet-form-border-not-valid")
        }
        return false;
    } else {
        return true;
    }
}

/****************************************
 * 
 * a decorative function:select all text of input when you click on it 

 * 
 * **************************************/
$("#tenet-shop-name").click(() => {
    if ($(".tenet-shop-pencil-edit").hasClass("tenet-display-none")) {
        $("#tenet-shop-name").select()
    }
});
$("#tenet-shop-telephone").click(() => {
    if ($(".tenet-shop-pencil-edit").hasClass("tenet-display-none")) {
        $("#tenet-shop-telephone").select()
    }
});
$("#tenet-shop-cellphone").click(() => {
    if ($(".tenet-shop-pencil-edit").hasClass("tenet-display-none")) {
        $("#tenet-shop-cellphone").select()
    }
});
$("#tenet-shop-address").click(() => {
    if ($(".tenet-shop-pencil-edit").hasClass("tenet-display-none")) {
        $("#tenet-shop-address").select()
    }
});
$("#tenet-shop-address").click(() => {
    if ($(".tenet-shop-pencil-edit").hasClass("tenet-display-none")) {
        $("#tenet-shop-address").select()
    }
});


/****************************************
 * 
 * toast message initializing
 * 
 * **************************************/
document.getElementById("liveToastBtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}