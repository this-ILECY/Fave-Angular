let promotionJSON = {
    "promotionID": 1,
    "productID": 1,
    "shopID": 1,
    "basePrice": 20000,
    "discountPrice": 10000,
    "stock": 12,
    "qualityGrade": 1,
    "endDate": "2021-10-10T00:00:00",
    "endTime": "06:05:13",
    "isActive": true,
    "isDeleted": false,
    "createdDate": "0001-01-01T00:00:00"
};


let promotionList;
let promotionBest = $("#tenet-shop-promotion-best")
let promotionMiddle = $("#tenet-shop-promotion-middle")
let promotionWorst = $("#tenet-shop-promotion-Worst")
let theshopID = "1"
let UrlpromotionByID = "https://localhost:44377/api/Promotion/PromotionByShopID?ShopID=" + theshopID

$(document).ready(() => {
    promotionLoader()
});

let promotionLoader = () => {
    var setting = {
        "url": UrlpromotionByID,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(setting).done(function(response) {
        promotionList = response
        promotionAdder();
    });
};

let promotionAdder = () => {
    console.log(promotionList)
    debugger;
    for (i = 0; i < promotionList.length; i++) {
        if (promotionList[i].qualityGrade == 1) {
            promotionBest.removeClass("d-none").clone().appendTo(".tenet-card-main-row").attr('id', 'BestPromo' + i)
            document.getElementById('BestPromo' + i).querySelectorAll('.tenet-pro-card-before-price')[0].children[0].innerHTML = promotionList[i].basePrice
            document.getElementById('BestPromo' + i).querySelectorAll('.tenet-pro-card-after-price')[0].innerHTML = promotionList[i].discountPrice
        } else if (promotionList[i].qualityGrade == 2) {
            promotionMiddle.removeClass("d-none").clone().appendTo(".tenet-card-main-row").attr('id', 'MiddlePromo' + i)
            document.getElementById('MiddlePromo' + i).querySelectorAll('.tenet-pro-card-before-price')[0].children[0].innerHTML = promotionList[i].basePrice
            document.getElementById('MiddlePromo' + i).querySelectorAll('.tenet-pro-card-after-price')[0].innerHTML = promotionList[i].discountPrice
        } else if (promotionList[i].qualityGrade == 3) {
            promotionWorst.removeClass("d-none").clone().appendTo(".tenet-card-main-row").attr('id', 'WorstPromo' + i)
            document.getElementById('WorstPromo' + i).querySelectorAll('.tenet-pro-card-before-price')[0].children[0].innerHTML = promotionList[i].basePrice
            document.getElementById('WorstPromo' + i).querySelectorAll('.tenet-pro-card-after-price')[0].innerHTML = promotionList[i].discountPrice
        } else {

        }
    }
    promotionBest.addClass("d-none")
    promotionMiddle.addClass("d-none")
    promotionWorst.addClass("d-none")
};