/******************************
 * 
 * 
 * change between discount price and discount percent
 * 
 * 
*******************************/
$(".form-check").click(() => {
    radio()

})
let radio = () => {
    if ($(".tenet-shop-addpro-radio-dispercent").prop("checked")) {
        $(".tenet-shop-addpro-radio-dispercent-text").removeAttr("disabled", "disabled");
        $(".tenet-shop-addpro-radio-disprice-text").attr("disabled", "disabled");
    } else if ($(".tenet-shop-addpro-radio-disprice").prop("checked")) {
        $(".tenet-shop-addpro-radio-dispercent-text").attr("disabled", "disabled");
        $(".tenet-shop-addpro-radio-disprice-text").removeAttr("disabled", "disabled");
    }
};
$(document).ready(() => {
    ShowTime()
});
/******************************
 * 
 * 
 * form validation
 * 
 * 
*******************************/
$(".tenet-shop-addpro-submit").click(() => {
    let promoNameBool = $("#promo-name").val().length <= 1
    let promoClassBool = $("#tenet-shop-addpro-class option:selected").val() == 0
    let promoDiscountBool = $(".tenet-shop-addpro-radio-disprice-text").val().length == 0
        || $(".tenet-shop-addpro-radio-dispercent-text").val().length == 0
    let promoTimeBool = $(".tenet-shop-addpro-end-minute-text").val().length == 0
        && $(".tenet-shop-addpro-end-hour-text").val().length == 0
        && $(".tenet-shop-addpro-end-day-text").val().length == 0
    if (promoNameBool) {
        $("#promo-name").addClass("tenet-form-border-not-valid")
    }
    if (promoClassBool) {
        $("#tenet-shop-addpro-class").addClass("tenet-form-border-not-valid")
    }
    if (promoDiscountBool) {
        $(".tenet-shop-addpro-radio-disprice-text").addClass("tenet-form-border-not-valid")
        $(".tenet-shop-addpro-radio-dispercent-text").addClass("tenet-form-border-not-valid")
    }
    if (promoTimeBool) {
        $(".tenet-shop-addpro-end-hour-text").addClass("tenet-form-border-not-valid")
        $(".tenet-shop-addpro-end-minute-text").addClass("tenet-form-border-not-valid")
        $(".tenet-shop-addpro-end-day-text").addClass("tenet-form-border-not-valid")
    }
    if(!promoTimeBool && !promoDiscountBool && !promoClassBool && !promoNameBool){}
})






/******************************
 * 
 * 
 * end time calculator
 * 
 * 
*******************************/
let globalTime
/*time calculator */
let TimeAdder = () => {
    let day = parseInt($("#txt-end-day").val())
    let hour = parseInt($("#txt-end-hour").val())
    let min = parseInt($("#txt-end-min").val())
    let now = new Date()
    let newDate = new Date()

    if (!isNaN(day)) {
        newDate.setHours(now.getHours() + (day) * 24)
    }
    hourbreaker: if (!isNaN(hour)) {
        if (hour > 23) {
            break hourbreaker;
        }
        newDate.setHours(newDate.getHours() + hour)
    }
    minbreaker: if (!isNaN(min)) {
        if (min > 59) {
            break minbreaker;
        }
        newDate.setMinutes(newDate.getMinutes() + min)
    }
    day = Math.floor((Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()) - Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) / (1000 * 60 * 60 * 24))
    dateChanger(now, newDate, day)
}
/*changing the time text*/
let dateChanger = (now, newDate, day) => {
    let dateInnerHTML;
    if (day == 0) {
        dateInnerHTML = "امروز"
        globalTime = newDate;
    } else if (day == 1) {
        dateInnerHTML = "فردا"
        globalTime = newDate;
    } else if (day >= 2) {
        let month = Math.floor(day / 30)
        let remainDay = day - (month * 30)
        if (month >= 12) {
            let year = Math.floor(month / 12)
            let remainMonth = month - (year * 12)
            //remainDay = day - (year * 365) - (remainMonth * 12)
            dateInnerHTML = year + ' سال و ' + remainMonth + ' ماه و ' + remainDay + 'روز دیگر'
        } else {
            if (month > 0) {
                dateInnerHTML = month + 'ماه و ' + remainDay + ' روز دیگر'
                globalTime = newDate;
            } else {
                dateInnerHTML = day + ' روز دیگر'
                globalTime = newDate;
            }
        }
    }
    if (dateInnerHTML != undefined) {
        document.getElementById('tenet-shop-addpro-endtime-day').innerHTML = dateInnerHTML
    }
}
/*live dateTime.now */
let ShowTime = () => {
    var dt;
    if (globalTime == undefined) {
        dt = new Date();
    } else if (globalTime != undefined) {
        dt = globalTime;
        globalTime.setSeconds(globalTime.getSeconds() + 1)
    }
    document.getElementById("tenet-shop-addpro-endtime-remains")
        .innerHTML = dt.toLocaleTimeString('en-GB');//toLocaleTimeString('en-GB') is 24h format
    window.setTimeout("ShowTime()", 1000);
}
/*converts min to hour and day */
let dateCalc = () => {
    let day = parseInt($("#txt-end-day").val())
    let hour = parseInt($("#txt-end-hour").val())
    let min = parseInt($("#txt-end-min").val())

    if (min >= 60) {
        if (isNaN(hour)) hour = 0
        if (isNaN(day)) day = 0
        let extraHour = Math.floor(min / 60)
        let remainMin = min - (extraHour * 60)
        $(".tenet-shop-addpro-end-minute-text").val(remainMin)
        $(".tenet-shop-addpro-end-hour-text").val(hour + extraHour)
        hour = extraHour
    }
    if (hour >= 24) {
        if (isNaN(day)) day = 0
        let extraDay = Math.floor(hour / 24)
        let remainHour = hour - (extraDay * 24)
        $(".tenet-shop-addpro-end-hour-text").val(remainHour)
        $(".tenet-shop-addpro-end-day-text").val(day + extraDay)
    }
    TimeAdder()
}
/*the input tracking*/
$(".tenet-shop-addpro-end-minute-text").change(() => {
    if (!isNaN($(".tenet-shop-addpro-end-minute-text").val())) {
        if ($(".tenet-shop-addpro-end-minute-text").val() > 59) {
            dateCalc()
        } else {
            $(".tenet-shop-addpro-end-minute-text").removeClass('tenet-form-border-not-valid')
            TimeAdder()
        }
    } else {
        $(".tenet-shop-addpro-end-minute-text").addClass('tenet-form-border-not-valid')
    }

})
$(".tenet-shop-addpro-end-hour-text").change(() => {
    if (!isNaN($(".tenet-shop-addpro-end-hour-text").val())) {
        if ($(".tenet-shop-addpro-end-hour-text").val() > 23) {
            dateCalc()
        } else {
            $(".tenet-shop-addpro-end-hour-text").removeClass('tenet-form-border-not-valid')
            TimeAdder()
        }
    } else {
        $(".tenet-shop-addpro-end-hour-text").addClass('tenet-form-border-not-valid')
    }
})
$(".tenet-shop-addpro-end-day-text").change(() => {
    if (!isNaN($(".tenet-shop-addpro-end-day-text").val())) {
        if ($(".tenet-shop-addpro-end-day-text").val() > 730) {
            dateCalc()
        } else {
            $(".tenet-shop-addpro-end-day-text").removeClass('tenet-form-border-not-valid')
            TimeAdder()
        }
    } else {
        $(".tenet-shop-addpro-end-day-text").addClass('tenet-form-border-not-valid')
    }
})



