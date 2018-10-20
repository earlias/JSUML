$(document).ready(function() {
    $('#dashboard').hover(
        function() {
            $(this).stop().animate(
                {
                    left: '0'
                },
                500,
                'easeInSine'
            );
        },
        function() {
            $(this).stop().animate(
                {
                    left: '-92px'
                },
                500,
                'easeOutSine'
            );
        }
    ); // end hover
    $('#dashboard img').each(function() {
        var imgFile = $(this).attr('src');
        var newImg = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        newImg.src = imgFile.replace(imgExt,'_c$1');
        $(this).hover (
            function() {
                $(this).attr('src', newImg.src);
            },
            function() {
                $(this).attr('src', imgFile);
            }
        );
    });
});