var main = $('main'),
    page = $('.page'),
    loader = $('.loader');



// INIT

$(document).ready(function () {
    // WIDOW FIX
    $('.title, h1, h3, p, .snap.intro .module, .page_title').widowFix();

    page.click(function (evt) {

        if (evt.target.matches('span')) {
            asterisk();
            return;
        }

        if (!$(this).closest('.page').hasClass('is-active')) {


            var $this = $(this),
                number = $this.data('number');

            page.removeClass('is-active');
            $this.addClass('is-active');

            page.not($this).animate({ // animate your right div
                scrollTop: 0 // to the position of the target 
            }, 500);


            page.each(function (i) {

                if (i < number) {
                    $(this).addClass('is-slided');
                } else {
                    $(this).removeClass('is-slided');
                }
            })

        }
    })


})







