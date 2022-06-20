//ハンバーガーメニューの開閉
$('#hamburger').click(function () {
    if ($('#hamburger_menu').is(':visible')) {
        $('#hamburger_menu').slideUp();
    } else {
        $('#hamburger_menu').slideDown();
    }
});


//背景画像スライドショー

$('#slider_area').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
});
$('#slider_area_sp').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
});



//画面をスクロールしてふわっと表示
$('.animate__animated').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeIn');
            this.destroy();
        }
    },
    offset: '50%',
});

//GoogleMap
function initMap() {
    // マップの作成
    var latlng = new google.maps.LatLng(35.68147146139666, 139.76472713422814);
    var myOptions = {
        zoom: 16,
        center: latlng,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: false,
    };
    // マップの表示
    var map = new google.maps.Map(document.getElementById('google_map'), myOptions);
}

//FAQアコーディオン
$(function () {
    $('.question').next('dd').hide();
    $('.question').click(function () {
        $(this).next('dd').slideToggle();
        $(this).find(".icon").toggleClass('open');
    });
});
