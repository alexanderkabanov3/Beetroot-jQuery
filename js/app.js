const firstTab = $('.article__tabs:first-child');
const secondTab = $('.article__tabs:nth-child(2)');
const thirdTab = $('.article__tabs:last-child');

secondTab.on('click', () => {
        firstTab.removeClass('article__tabs--focus');
        thirdTab.removeClass('article__tabs--focus');
        secondTab.addClass('article__tabs--focus');

        $('.article__contRaitInfo').fadeIn();
        $('.article__cont').hide();
        $('.article__buy').hide();
});

thirdTab.on('click', () => {
    firstTab.removeClass('article__tabs--focus');
    secondTab.removeClass('article__tabs--focus');
    thirdTab.addClass('article__tabs--focus');

    $('.article__buy').fadeIn();
    $('.article__cont').hide()
    $('.article__contRaitInfo').hide();
});

firstTab.on('click', () => {
    thirdTab.removeClass('article__tabs--focus');
    secondTab.removeClass('article__tabs--focus');
    firstTab.addClass('article__tabs--focus');

    $('.article__cont').fadeIn();
    $('.article__contRaitInfo').hide();
    $('.article__buy').hide();
});

// stars

const firstStar = $('.article__star1');
const secondStar = $('.article__star2');
const thirdStar = $('.article__star3');
const fourthStar = $('.article__star4');
const fifthStar = $('.article__star5');

firstStar.on('mouseover', () => {
    firstStar.addClass('article__star--yellow');

        firstStar.on('mouseleave', () => {
            firstStar.removeClass('article__star--yellow');
        }); 
});

firstStar.on('click', () => {
    firstStar.addClass('article__star--yellow');

    firstStar.on('mouseleave', () => {
        firstStar.addClass('article__star--yellow');
    });
});

secondStar.on('mouseover', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');

    secondStar.on('mouseleave', () => {
        firstStar.removeClass('article__star--yellow');
        secondStar.removeClass('article__star--yellow');
    });
});

secondStar.on('click', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');

    secondStar.on('mouseleave', () => {
        firstStar.addClass('article__star--yellow');
        secondStar.addClass('article__star--yellow');
    });
});

thirdStar.on('mouseover', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');

    thirdStar.on('mouseleave', () => {
        firstStar.removeClass('article__star--yellow');
        secondStar.removeClass('article__star--yellow');
        thirdStar.removeClass('article__star--yellow');
    });
});

thirdStar.on('click', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');

    thirdStar.on('mouseleave', () => {
        firstStar.addClass('article__star--yellow');
        secondStar.addClass('article__star--yellow');
        thirdStar.addClass('article__star--yellow');
    });
});

fourthStar.on('mouseover', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');
    fourthStar.addClass('article__star--yellow');

    fourthStar.on('mouseleave', () => {
        firstStar.removeClass('article__star--yellow');
        secondStar.removeClass('article__star--yellow');
        thirdStar.removeClass('article__star--yellow');
        fourthStar.removeClass('article__star--yellow');
    });
});

fourthStar.on('click', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');
    fourthStar.addClass('article__star--yellow');

    fourthStar.on('mouseleave', () => {
        firstStar.addClass('article__star--yellow');
        secondStar.addClass('article__star--yellow');
        thirdStar.addClass('article__star--yellow');
        fourthStar.addClass('article__star--yellow');
    });
});

fifthStar.on('mouseover', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');
    fourthStar.addClass('article__star--yellow');
    fifthStar.addClass('article__star--yellow');

    fifthStar.on('mouseleave', () => {
        firstStar.removeClass('article__star--yellow');
        secondStar.removeClass('article__star--yellow');
        thirdStar.removeClass('article__star--yellow');
        fourthStar.removeClass('article__star--yellow');
        fifthStar.removeClass('article__star--yellow');
    });
});

fifthStar.on('click', () => {
    firstStar.addClass('article__star--yellow');
    secondStar.addClass('article__star--yellow');
    thirdStar.addClass('article__star--yellow');
    fourthStar.addClass('article__star--yellow');
    fifthStar.addClass('article__star--yellow');

    fifthStar.on('mouseleave', () => {
        firstStar.addClass('article__star--yellow');
        secondStar.addClass('article__star--yellow');
        thirdStar.addClass('article__star--yellow');
        fourthStar.addClass('article__star--yellow');
        fifthStar.addClass('article__star--yellow');
    });
});