let progress = 0,
    interval,
    $dish = $('#carrots'),
    $output = $('#output'),
    $updater = $('#updater');

$('button').one('click', () => {

    interval = setInterval(() => {

        progress += Math.floor(Math.random() * 10);

        $dish.attr('value', progress).text(`${progress}%`);

        $updater.text(`Cooking progress is ${progress}%`);

        if (progress >= $dish.attr('max')) {

            clearInterval(interval);

            $('<div>', {
                'text': 'Your 🥕 is cooked',
            }).appendTo($output)
        }
    }, 500)
})