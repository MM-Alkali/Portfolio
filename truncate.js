$(document).ready(function () {
    var showChar = 600;
    var ellipsestext = "...";
    var moretext = " Read More";
    var lesstext = " Read Less";

    $('.truncate').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html =
                c +
                '<span class="moreellipses">' +
                ellipsestext +
                '&nbsp;</span><span class="morecontent" style="display: none;">' +
                h +
                '</span>&nbsp;&nbsp;<a href="#" class="morelink">' +
                moretext +
                '</a>';

            $(this).html(html);
        }
    });

    $(".morelink").click(function (e) {
        e.preventDefault();
        var thisEl = $(this);
        var cT = thisEl.closest(".truncate");
        var tX = ".truncate";
        if (thisEl.hasClass("less")) {
            thisEl.removeClass("less");
            thisEl.html(moretext);
        } else {
            thisEl.addClass("less");
            thisEl.html(lesstext);
        }
        cT.find(".morecontent").toggle();
        cT.find(".moreellipses").toggle();
        return false;
    });
});

$(document).ready(function() {
    $('.topic-cell').click(function() {
        var topicCell = $(this);
        var topic = topicCell.data('topic');
        var content = $('.topic-content[data-topic="' + topic + '"]');
        var arrowDown = topicCell.find('.arrow-down');
        var arrowUp = topicCell.find('.arrow-up');
        
        content.toggle();
        arrowDown.toggle();
        arrowUp.toggle();
    });
});
  