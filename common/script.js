function scrollToAnchor(aid) {
    var aTag = $("#" + aid);
    $('html,body').animate({ scrollTop: aTag.offset().top - 150 }, 'slow');
}

$(function(){
    $(".sticker-aktionscodes").click(function(){
        scrollToAnchor("anchor-action");
    })
})