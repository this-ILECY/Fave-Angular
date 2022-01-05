/*Avatar swap opacity changer*/
$(".tenet-shop-avatar-upload").mouseover(function() {
    $(".tenet-shop-avatar-upload").addClass("fa-swap-opacity");
});
$(".tenet-shop-avatar-upload").mouseout(function() {
    $(".tenet-shop-avatar-upload").removeClass("fa-swap-opacity");
});

let file, reader, result

function encodeImageFileAsURL(element) {
    file = element.files[0];
    reader = new FileReader();
    reader.onloadend = function() {
        console.log('RESULT', reader.result)
    }
    result = reader.result
    reader.readAsDataURL(file);
    $.post({
        url: "https://localhost:44377/api/Promotion/getimg",
        headers: { img: result }
    })
}