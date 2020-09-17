let carrot_progress = 0,
    potato_progress = 0,
    carrot_interval,
    potato_interval,
    $carrot_dish = $('#carrots'),
    $potato_dish = $('#potato'),
    $complete = $('#complete'),
    $potato_status = $('#potato_status'),
    $carrot_status = $('#carrot_status'),
    $complete_list = $('<ul>').appendTo($complete);

$('button').one('click', (e) => {

    $(e.target).remove();

    $('<div>', {
        'text': 'We are cooking your food',
        'role': 'status',
        'tabindex': '-1'
    })
        .prependTo($complete)
        .focus();

    carrot_interval = setInterval(() => {

        carrot_progress += Math.floor(Math.random() * 30);

        if (carrot_progress > 100) carrot_progress = 100;

        $carrot_dish
            .attr('value', carrot_progress)
            .attr('aria-valuenow', carrot_progress)
            .text(`${carrot_progress}%`);

        $carrot_status
            .text(`${carrot_progress}%`);

        if (carrot_progress >= $carrot_dish.attr('max')) {

            clearInterval(carrot_interval);

            $('<li>', {
                'text': 'Your 🥕 is cooked',
                'role': 'status',
                'tabindex': '-1'
            })
                .appendTo($complete_list)
                .focus();
        }
    }, 1000)

    potato_interval = setInterval(() => {

        potato_progress += Math.floor(Math.random() * 10);

        if (potato_progress > 100) potato_progress = 100;

        $potato_dish
            .attr('value', potato_progress)
            .attr('aria-valuenow', potato_progress)
            .text(`${potato_progress}%`)

        $potato_status
            .text(`${potato_progress}%`)

        if (potato_progress >= $potato_dish.attr('max')) {

            clearInterval(potato_interval);

            $('<li>', {
                'text': 'Your 🥔 is cooked',
                'role': 'status',
                'tabindex': '-1'
            })
                .appendTo($complete_list)
                .focus();

        }
    }, 333)

    complete_interval = setInterval(() => {

        if ($complete_list.find('li').length === 2) {
            $('<div>', {
                'html': '<a href="/">All done. Enjoy your next step</a>',
                'role': 'status',
                'tabindex': '-1'
            })
                .appendTo($complete)
                .focus();

            clearInterval(complete_interval);
        }

    }, 500)
})