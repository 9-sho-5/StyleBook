/* タブ */
$(".tab-wrap .tab").click(function(e){
    if(!$(this).hasClass("selected")){
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    }
});