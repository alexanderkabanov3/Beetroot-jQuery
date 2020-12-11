const num = $('.btn');

num.each((i, value) => {
    num[i].addEventListener('click', () => {
            $('.result')[0].innerHTML = $('.result')[0].innerHTML + value.innerHTML;
            
            if ($('.result')[0].innerHTML.charAt(0) == '/' || $('.result')[0].innerHTML.charAt(0) == '*' || $('.result')[0].innerHTML.charAt(0) == '+' || $('.result')[0].innerHTML.charAt(0) == '0') {
                $('.result')[0].innerHTML = '';
            }

            if (($('.result')[0].innerHTML.charAt(0) == '-') && ($('.result')[0].innerHTML.charAt(1) == '+' || $('.result')[0].innerHTML.charAt(1) == '-' || $('.result')[0].innerHTML.charAt(1) == '/' || $('.result')[0].innerHTML.charAt(1) == '*')) {
                $('.result')[0].innerHTML = '-';
            }


            let minus = $('.result')[0].innerHTML.search('-');

            if ($('.result')[0].innerHTML.charAt(minus + 1) == '-' || $('.result')[0].innerHTML.charAt(minus + 1) == '+' || $('.result')[0].innerHTML.charAt(minus + 1) == '/' || $('.result')[0].innerHTML.charAt(minus + 1) == '*') {
                $('.result')[0].innerHTML = $('.result')[0].innerHTML.substring(0, $('.result')[0].innerHTML.length - 1);
            }
 
            $('.eql').on('click', () => {
                if (!$('.result')[0].innerHTML == '') {
                    $('.result')[0].innerHTML = eval($('.result')[0].innerHTML);
                }     
            });
    });
});

$('.delete').on('click', () => {
    $('.result')[0].innerHTML = '';
});
    
