/* タブ */
$(".tab-wrap .tab").click(function(e){
    if(!$(this).hasClass("selected")){
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        if($(this).hasClass("green")){
            $(".info").removeClass("red green blue");
            $(".info").addClass("green");
        }
        else if($(this).hasClass("red")){
            $(".info").removeClass("red green blue");
            $(".info").addClass("red");
        }
        else if($(this).hasClass("blue")){
            $(".info").removeClass("red green blue");
            $(".info").addClass("blue");
        }
    }
});