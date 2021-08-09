let progress = 0,
    interval,
    $dish = $('#carrots'),
    $complete = $('#complete'),
    $status = $('#visible-status'),
    $ariaStatus = $('#approximate-status');

$('button').one('click', () => {

    $('<div>', {
        'text': 'We are cooking your 🥕',
    }).appendTo($complete)

    interval = setInterval(() => {

        progress += Math.floor(Math.random() * 3);

        if(progress > 100) progress = 100;

        $dish
            .attr('value', progress)
            .attr('aria-valuenow', progress)
            .text(`${progress}%`);

        $status
            .text(`${progress}%`)

        $ariaStatus
            .text(`${10 * progress}%`)

        if (progress >= $dish.attr('max')) {

            clearInterval(interval);

            $complete.empty();

            $('<div>', {
                'text': 'Your 🥕 is cooked',
            }).appendTo($complete)
        }
    }, 1000)
})
