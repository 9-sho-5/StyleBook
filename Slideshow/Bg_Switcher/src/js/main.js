jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['../Bg_Switcher/src/img/dog1.jpg','../Bg_Switcher/src/img/dog2.jpg','../Bg_Switcher/src/img/dog3.jpg'], // 切り替える背景画像を指定
        interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
        duration: 1000, // エフェクトの時間を指定します。
    }); 
});