$(document).ready(function () {
    $('.burger').click(function (event) {
        showPopup();
    });

    $('.closeBtn').click(function () {
        hidePopup();
    });

    $('.popupWrapper').click(function () {
        hidePopup();
    });

    $(window).on("resize", function () {
        hidePopup();
    });
});

function showPopup() {
    $('.headerNav').addClass('floating');
    $('.popupWrapper').removeClass('hidden');
}
function hidePopup() {
    $('.headerNav').removeClass('floating');
    $('.popupWrapper').addClass('hidden');
}
